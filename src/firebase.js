// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// IMPORTANT: Verify these values in your Firebase Console (Project Settings > General)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let app;
let db;

if (firebaseConfig.apiKey) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase Initialized for project:", firebaseConfig.projectId);
  } catch (error) {
    console.error("Firebase Initialization Error:", error);
  }
} else {
  console.warn(
    "⚠️ Firebase configuration is missing. " +
    "If you are deployed on Vercel, please make sure you have added the VITE_FIREBASE_* environment variables in your Vercel Project Settings."
  );
  
  // Export a custom Proxy to handle db calls gracefully without breaking the import on load,
  // throwing a clean, informative error when an operation is performed.
  db = new Proxy({}, {
    get(target, prop) {
      throw new Error(
        "Firebase is not configured. Please add VITE_FIREBASE_* environment variables to your Vercel Dashboard Settings."
      );
    }
  });
}

export { db };

