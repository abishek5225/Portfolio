// src/lib/firebaseClient.js

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: 'blog-app-2dc38.appspot.com',  // corrected
  messagingSenderId: '224997939197',
  appId: '1:224997939197:web:c0fc47d992d0bc579beb94',
  measurementId: 'G-1KQ8L91P6Z',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
