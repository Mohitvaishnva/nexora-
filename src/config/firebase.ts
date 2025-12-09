import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACQMsjO3Cfq2RTV_LQSNR2D-Yqfs6zrv4",
  authDomain: "nexora-a6478.firebaseapp.com",
  databaseURL: "https://nexora-a6478-default-rtdb.firebaseio.com",
  projectId: "nexora-a6478",
  storageBucket: "nexora-a6478.firebasestorage.app",
  messagingSenderId: "774201147498",
  appId: "1:774201147498:web:c6445a33bc4f50f6148a13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
