import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras import layers, models
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
import os, json
import numpy as np

# --- 1. Path dataset ---
BASE_DIR = "/Users/muhammadpanduprapyusta/Documents/Prototype pandu/Manpro skincheck/SkinCheckAI/SkinCheckAI/skin_disease"
TRAIN_DIR = os.path.join(BASE_DIR, "train")
TEST_DIR = os.path.join(BASE_DIR, "test")

# --- 2. Load dataset otomatis ---
train_ds = tf.keras.utils.image_dataset_from_directory(
    TRAIN_DIR,
    image_size=(224, 224),
    batch_size=32,
    label_mode="categorical"
)
test_ds = tf.keras.utils.image_dataset_from_directory(
    TEST_DIR,
    image_size=(224, 224),
    batch_size=32,
    label_mode="categorical"
)

# --- 3. Ambil nama label ---
class_names = train_ds.class_names
print("Kelas penyakit yang terdeteksi:", class_names)

# --- 4. Normalisasi data ---
train_ds = train_ds.map(lambda x, y: (x / 255.0, y))
test_ds = test_ds.map(lambda x, y: (x / 255.0, y))

# --- 5. Cache & Prefetch untuk efisiensi ---
AUTOTUNE = tf.data.AUTOTUNE
train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size=AUTOTUNE)
test_ds = test_ds.cache().prefetch(buffer_size=AUTOTUNE)

# --- ✅ 6. Data Augmentation (agar model lebih robust) ---
data_augmentation = tf.keras.Sequential([
    layers.RandomFlip("horizontal_and_vertical"),
    layers.RandomRotation(0.2),
    layers.RandomZoom(0.2),
])

# --- ✅ 7. Bangun model CNN (MobileNetV2 pre-trained) ---
base_model = MobileNetV2(weights="imagenet", include_top=False, input_shape=(224,224,3))
base_model.trainable = False  # freeze layer dulu

model = models.Sequential([
    data_augmentation,
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.4),
    layers.Dense(len(class_names), activation='softmax')
])

# --- ✅ 8. Compile model ---
model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=1e-4),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()

# --- ✅ 9. Callback: EarlyStopping & ModelCheckpoint ---
callbacks = [
    EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True),
    ModelCheckpoint("../backend/skincheck_model.keras", save_best_only=True)
]

# --- ✅ 10. Training tahap pertama (freeze) ---
history = model.fit(
    train_ds,
    validation_data=test_ds,
    epochs=10,
    callbacks=callbacks
)

# --- ✅ 11. Fine-tuning tahap kedua (unfreeze sebagian layer) ---
base_model.trainable = True
fine_tune_at = 100
for layer in base_model.layers[:fine_tune_at]:
    layer.trainable = False

model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=1e-5),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# --- ✅ 12. Lanjut training (fine-tuning) ---
fine_tune_epochs = 15
total_epochs = 10 + fine_tune_epochs

history_fine = model.fit(
    train_ds,
    validation_data=test_ds,
    epochs=total_epochs,
    initial_epoch=history.epoch[-1],
    callbacks=callbacks
)

# --- ✅ 13. Evaluasi model ---
loss, acc = model.evaluate(test_ds)
print(f"Akurasi Test: {acc*100:.2f}%")

# --- ✅ 14. Simpan class_names ---
with open("../backend/class_names.json", "w") as f:
    json.dump(class_names, f)

print("✅ Model dan class_names disimpan ke folder backend/")