# Use official Python image
FROM python:3.10

# Set working directory
WORKDIR /app

# Copy files
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

RUN apt-get update && apt-get install -y wait-for-it

# Expose port
EXPOSE 8000

# Run the FastAPI app
CMD ["wait-for-it", "db:3306", "--","uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
