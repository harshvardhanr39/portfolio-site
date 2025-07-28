from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# Allow frontend to fetch from backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

projects = [
    {"id": 1, "title": "Portfolio Site", "description": "My personal portfolio"},
    {"id": 2, "title": "AI App", "description": "An AI-powered app"},
]


@app.get("/")
def root():
    return {"message": "Backend is running!"}


@app.get("/projects")
def get_projects():
    return projects