import sys, os
from flask import Flask, render_template, request
import tensorflow as tf
import numpy as np
from PIL import Image
import json

# --- Path setup ---
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))        # backend/
ROOT_DIR = os.path.dirname(CURRENT_DIR)                         # SkinCheckAI/
BACKEND_DIR = CURRENT_DIR                                       # backend/

MODEL_PATH = os.path.join(BACKEND_DIR, "skincheck_model.keras") # ✅ betul
LABEL_PATH = os.path.join(BACKEND_DIR, "class_names.json")      # ✅ tambahkan

TEMPLATES_DIR = os.path.join(ROOT_DIR, "templates")
STATIC_DIR = os.path.join(ROOT_DIR, "static")
UPLOAD_FOLDER = os.path.join(STATIC_DIR, "uploads")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# --- Init Flask ---
app = Flask(
    __name__,
    static_folder=STATIC_DIR,
    template_folder=TEMPLATES_DIR
)

# --- Load model & label ---
model = tf.keras.models.load_model(MODEL_PATH)
with open(LABEL_PATH, "r") as f:
    class_names = json.load(f)

# --- Fungsi prediksi ---
def predict_image(image_path):
    img = Image.open(image_path).convert("RGB").resize((224, 224))
    img_array = np.expand_dims(np.array(img) / 255.0, axis=0)
    preds = model.predict(img_array)
    predicted_class = class_names[int(np.argmax(preds))]
    confidence = float(np.max(preds) * 100)
    return predicted_class, confidence

# --- Route utama ---
@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    if request.method == "POST":
        file = request.files.get("image")
        if file and file.filename:
            save_path = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(save_path)

            predicted_class, confidence = predict_image(save_path)
            result = {
                "filename": file.filename,
                "predicted_class": predicted_class,
                "confidence": f"{confidence:.2f}"
            }

    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)