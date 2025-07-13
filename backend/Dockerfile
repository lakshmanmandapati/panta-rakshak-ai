# Step 1: Start with a lightweight Python base image
# We use 'slim' to keep the final image size smaller.
FROM python:3.10-slim

# Step 2: Set the working directory inside the container
# All subsequent commands will run from this '/app' directory.
WORKDIR /app

# Step 3: Copy and install dependencies
# We copy only the requirements file first to take advantage of Docker's caching.
# This makes future builds much faster if the requirements haven't changed.
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Step 4: Copy the rest of your application code into the container
# This includes main.py, potatoes.h5, etc.
COPY . .

# Step 5: Expose the port that the application will run on
# Our Uvicorn server will run on port 8000 inside the container.
EXPOSE 8000

# Step 6: Define the command to run your application
# This command starts the Uvicorn server.
# The host '0.0.0.0' is crucial to make it accessible from outside the container.
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]