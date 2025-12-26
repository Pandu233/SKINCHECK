import tensorflow as tf
import numpy as np
from app.services.preprocess import preprocess_image
from app.utils.labels import CLASS_NAMES

MODEL_PATH = "models/skincheck_model.keras"

model = tf.keras.models.load_model(MODEL_PATH)

async def predict_image(file):
    image = await preprocess_image(file)
    preds = model.predict(image)[0]

    class_idx = int(np.argmax(preds))
    confidence = float(preds[class_idx])

    return {
        "prediction": CLASS_NAMES[class_idx],
        "confidence": round(confidence * 100, 2)
    }
