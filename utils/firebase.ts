// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getRemoteConfig, isSupported } from 'firebase/remote-config'
import {
  getAnalytics,
  isSupported as isSupportedAnalytics,
} from 'firebase/analytics'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MESUREMENT_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = async () =>
  (await isSupportedAnalytics()) && getAnalytics(app)
export const messaging = getMessaging(app)
// Call by await remoteConfig() every time a Remote Config instance is needed
export const remoteConfig = async () =>
  (await isSupported()) && getRemoteConfig(app)
