import tensorflow as tf
import numpy as np
from PIL import Image
from app.utils.labels import CLASS_NAMES

MODEL_PATH = "/Users/asyzyni/Desktop/SKINCHECK/backend/models/skincheck_model.keras"
IMAGE_SIZE = (224,224)

model = tf.keras.models.load_model(MODEL_PATH)

def predict_top3 (image: Image.Image):
    image = image.convert("RGB")
    image = image.resize(IMAGE_SIZE)
    
    img_arr = np.array(image) / 255.0
    img_arr = np.expand_dims(img_arr, axis=0)

    pred = model.predict(img_arr)[0]

    top_indices = pred.argsort()[-3:][::-1]
    
    results = []
    
    for idx in top_indices:
        results.append({
            "condition" : CLASS_NAMES[idx],
            "confidence" : float(pred[idx])
        })
    return results