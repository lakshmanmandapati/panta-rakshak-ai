# Panta Rakshak (పంట రక్షక్) - AI Crop Doctor

**Panta Rakshak** is a full-stack web application designed to help farmers diagnose diseases in their potato crops simply by uploading a photo of a leaf. Built with a powerful machine learning backend and a user-friendly, multilingual frontend, this tool provides instant, actionable advice to protect crop health.

This project was built to be fast, reliable, and accessible, especially for users on mobile devices with potentially slow internet connections.

<img width="546" height="608" alt="Screenshot 2025-07-13 at 2 31 21 PM" src="https://github.com/user-attachments/assets/e408d8b5-e11e-4ea6-91bb-aa8c4289b49e" />

---

## ✨ Key Features

* **AI-Powered Disease Detection**: Utilizes a deep learning model (trained with TensorFlow) to accurately classify potato leaves as **Healthy**, infected with **Early Blight**, or infected with **Late Blight**.
* **Simple & Intuitive UI**: A clean, mobile-first interface built with React that makes it easy for anyone to upload an image and get a diagnosis.
* **Instant, Actionable Advice**: Provides clear, color-coded results and straightforward "What to Do Next" steps for each diagnosis.
* **Multilingual Support**: The interface includes support for **English**, **Telugu (తెలుగు)**, and **Hindi (हिन्दी)** to ensure it is accessible to a wider audience of farmers.
* **Scalable Architecture**: The backend is containerized with Docker and deployed separately from the frontend, allowing for independent scaling and maintenance.

---

## 🛠️ Tech Stack

* **Backend**: Python, FastAPI, TensorFlow/Keras, Uvicorn
* **Frontend**: React, TypeScript, Vite, Tailwind CSS
* **Deployment**: Docker, Render (for the backend API), Vercel (for the frontend UI)

---

## 🚀 Running the Project Locally

To run the entire application on your local machine, you need to have two servers running at the same time: the **backend API** and the **frontend UI**.

### Prerequisites

* Python 3.10 or newer
* Node.js and npm
* Git

### Step 1: Clone the Repository

First, clone the project from GitHub to your local machine.

```bash
git clone [https://github.com/lakshmanmandapati/panta-rakshak-ai.git](https://github.com/lakshmanmandapati/panta-rakshak-ai.git)
cd panta-rakshak-ai
