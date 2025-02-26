pipeline {
    agent any

    environment {
        MYSQL_HOST = 'db'
        MYSQL_USER = 'root'
        MYSQL_PASSWORD = '3212'
        MYSQL_DATABASE = 'major_prj_db'
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Test Backend') {
            steps {
                script {
                    sh 'curl --retry 5 --retry-connrefused http://localhost:8000/team/'
                }
            }
        }

        stage('Test Frontend') {
            steps {
                script {
                    sh 'curl --retry 5 --retry-connrefused http://localhost:3000'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    sh 'docker tag major_project_devops_backend:latest amritsharma01/backend:latest'
                    sh 'docker tag major_project_devops_frontend:latest amritsharma01/frontend:latest'
                    sh 'docker push amritsharma01/backend:latest'
                    sh 'docker push amritsharma01/frontend:latest'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh 'docker-compose down'
                }
            }
        }
    }
}
