from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI(title="Potato Disease Classifier API")

# --- Configuration ---
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173",
    "https://panta-rakshak-ai.vercel.app",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Model & Class Loading ---
try:
    # --- CORRECTED MODEL PATH ---
    MODEL = tf.keras.models.load_model("potatoes.h5")
except Exception as e:
    raise IOError(f"Failed to load model from potatoes.h5. Error: {e}")

CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]
EXPECTED_IMAGE_SIZE = (256, 256) # The input size your model expects

@app.get("/ping")
async def ping():
    """A simple endpoint to check if the server is alive."""
    return "Hello, I am alive"

def preprocess_image(data: bytes) -> np.ndarray:
    """Reads, resizes, and normalizes image data for the model."""
    try:
        image = Image.open(BytesIO(data))
        image = image.resize(EXPECTED_IMAGE_SIZE)
        image_array = np.array(image)
        image_array = image_array / 255.0
        return image_array
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid image file: {e}")


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """Predicts the class and confidence for a given image file."""
    image = preprocess_image(await file.read())
    
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL.predict(img_batch)

    predicted_class_index = np.argmax(predictions[0])
    confidence = float(np.max(predictions[0]))
    predicted_class = CLASS_NAMES[predicted_class_index]
    
    return {
        'class': predicted_class,
        'confidence': f"{confidence:.2%}"
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
