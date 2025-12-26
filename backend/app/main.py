from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.predict import router as predict_router

app = FastAPI(title="SkinCheckAI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"],  # support both ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predict_router)

@app.get("/")
def root():
    return {"status": "SkinCheckAI backend running"}
