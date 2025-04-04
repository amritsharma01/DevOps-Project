# Multi-Container App CI/CD 🚀

This project implements a **multi-container application** with a **CI/CD pipeline**, **automated deployment**, and **monitoring**. It features a **FastAPI backend**, **React frontend**, and **MySQL database**, containerized using **Docker Compose** and deployed with **Jenkins** and **Ansible**. Monitoring and logging are handled using **Prometheus and Grafana**.

## 🏗️ Tech Stack
- **Backend:** FastAPI  
- **Frontend:** React (Vite)  
- **Database:** MySQL  
- **Containerization:** Docker Compose  
- **CI/CD:** Jenkins  
- **Automation:** Ansible  
- **Monitoring & Logging:** Prometheus, Grafana  

---

## 🚀 Features
✔ **Modular backend & frontend** for scalability  
✔ **Docker Compose for containerization**  
✔ **Jenkins pipeline** for CI/CD automation  
✔ **Prometheus & Grafana for monitoring & logging**  

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/amritsharma01/devops-project.git
cd devops-project
```
### 2️⃣ Set Up Environment Variables
Create a .env file in the root directory and configure the required environment variables.

### 3️⃣ Build & Run Containers
```sh
docker-compose up --build -d
```
### 4️⃣ Access the Application
- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:8000/team](http://localhost:8000/team)
- **Grafana Dashboard:** [http://localhost:3001](http://localhost:3001)
- **Prometheus Metrics:** [http://localhost:9090](http://localhost:9090)

---

## 🔧 CI/CD Pipeline with Jenkins
- The `Jenkinsfile` defines the build, test, and deploy stages.
- Triggers on every push to automate deployment.
- Runs Ansible playbooks for infrastructure provisioning.

## 📊 Monitoring with Prometheus & Grafana
- **Prometheus** collects system & app metrics.
- **Grafana** visualizes logs & performance metrics.
