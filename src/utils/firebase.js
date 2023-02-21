import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from "firebase/auth"

import { firebaseConfig } from '../config/firebase'

// Initialise Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// Initialise Google Analytics
const analytics = getAnalytics(app);

// Export auth
export const auth = getAuth(app);

export default app
