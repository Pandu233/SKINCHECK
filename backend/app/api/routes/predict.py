from fastapi import APIRouter, UploadFile, File, HTTPException
from app.core.model import predict_image

router = APIRouter()

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    result = await predict_image(file)
    return result
