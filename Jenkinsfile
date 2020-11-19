pipeline {
  agent any
  stages {
    stage('Prueba') {
      steps {
        bat 'npm install'
      }
    }

    stage('Prueba3') {
      steps {
        sh '''npm install
ng bulid --prod'''
      }
    }

  }
}