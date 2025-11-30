
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCdaA5mIgysrnyLrMOL9wwuVafKcWeNFEM",
  authDomain: "x-kira.firebaseapp.com",
  databaseURL: "https://x-kira-default-rtdb.firebaseio.com",
  projectId: "x-kira",
  storageBucket: "x-kira.firebasestorage.app",
  messagingSenderId: "215930236545",
  appId: "1:215930236545:web:a953b6672ab4894199a780",
  measurementId: "G-NKLB18HE1R"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const database = getDatabase(app);

// Initialize Analytics only in browser environment
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, database, analytics };
