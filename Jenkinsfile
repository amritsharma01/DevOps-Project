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

        stage('Cleanup Previous Containers') {
            steps {
                script {
                    sh '''
                    docker-compose down -v || true
                    docker rm -f $(docker ps -aq) || true
                    docker volume prune -f || true
                    '''
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
                    sh 'docker-compose up -d --remove-orphans'
                }
            }
        }
    }
    post {
            failure {
                sh 'docker-compose down --remove-orphans'
                echo 'Deployment failed'
            }
            success {
                echo 'Deployment successful'
            }
        }
}
