pipeline {
    agent any

    environment {
        HOST = "172.31.17.63"
        USER = "ubuntu"
        APP_DIR = "/home/ubuntu/student-management-fullstack"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(credentials: ['ec2-ssh-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ${USER}@${HOST} "

                    set -e

                    cd ${APP_DIR}

                    echo "Pulling latest code..."
                    git pull origin main

                    echo "Installing backend dependencies..."
                    cd backend
                    npm install

                    echo "Restarting backend..."
                    pm2 restart student-backend || pm2 start app.js --name student-backend
                    pm2 save

                    echo "Deploying frontend..."
                    sudo rm -rf /var/www/html/*
                    sudo cp -r ${APP_DIR}/frontend/* /var/www/html/

                    echo "Deployment completed."

                    EOF
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }
        failure {
            echo 'Deployment failed.'
        }
    }
}
