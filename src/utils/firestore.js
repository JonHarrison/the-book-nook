import { getFirestore, doc, getDoc, setDoc, collection } from 'firebase/firestore'

import app from './firebase'

export const db = getFirestore(app)

export const createUserDocument = async (user) => {
    const userRef = doc(db, "users", user.uid)
    const userDoc = await getDoc(userRef)

    // Create document for user if it doesn't already existing in the users collection
    if (!userDoc.exists()) {
        const { displayName, uid } = user

        try {
            // Create user document
            await setDoc(userRef, {
                uid,
                displayName,
            })
        } catch (error) {
            console.error("Error creating user document", error)
        }
    }
}

export const getBooksCollection = (uid) => {
    return new collection(db, 'library', uid, 'books')
}