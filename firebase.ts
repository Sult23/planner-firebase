import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDM2FXCZaNkBao89WyzFYYi9koPHDZSUFk',
  authDomain: 'next-features.firebaseapp.com',
  databaseURL:
    'https://next-features-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'next-features',
  storageBucket: 'next-features.appspot.com',
  messagingSenderId: '945806089795',
  appId: '1:945806089795:web:c5abb4716320a19ababef6',
}

const app = initializeApp(firebaseConfig)
