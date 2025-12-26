from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.predict import router as predict_router

app = FastAPI(title="SkinCheckAI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # nanti ganti domain frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predict_router, prefix="/api")

@app.get("/")
def root():
    return {"status": "SkinCheckAI backend running"}
