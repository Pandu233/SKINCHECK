from fastapi import APIRouter, UploadFile, File, HTTPException
from PIL import Image
import io
from app.core.model import predict_top3

router = APIRouter(prefix="/api", tags=["prediction"])

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    try:
        img_bytes = await file.read()
        img = Image.open(io.BytesIO(img_bytes))

        predictions = predict_top3(img)

        return {
            "predictions" : predictions
        }
        
    except Exception as e :
        raise HTTPException(status_code = 500, detail=str(e))
