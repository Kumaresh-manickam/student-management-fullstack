stage('Deploy to EC2') {
    steps {
        sshagent(credentials: ['ec2-ssh-key']) {
            sh '''
            ssh -o StrictHostKeyChecking=no ${USER}@${HOST} << EOF

            set -e

            cd /home/ubuntu/student-management-fullstack

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
            sudo cp -r /home/ubuntu/student-management-fullstack/frontend/* /var/www/html/

            echo "Deployment completed."

            EOF
            '''
        }
    }
}
