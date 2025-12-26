from PIL import Image
import numpy as np
import io

IMAGE_SIZE = (224, 224)

async def preprocess_image(file):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    image = image.resize(IMAGE_SIZE)

    img_array = np.array(image) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    return img_array
