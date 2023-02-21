import { createContext, useContext, useEffect, useState, useMemo } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

import { auth } from "../config/firebase";

// create Context.API object for this user authentication object
const userAuthContext = createContext({user:null, setUser: () => null});

// provide context for authentication, used to wrap the App components
export function UserAuthContextProvider({ children }) {
  // current user
  const [user, setUser] = useState({});
  // loading state
  const [loading, setLoading] = useState(true);

  // login with email and password
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // create a new user with email, password and display name
  function signUp(email, password, name) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (createdUser) => {
        // signed in
        console.log(createdUser);

        // updating user name
        await updateProfile(auth.currentUser, { displayName: name })
        .then(res => {
          return res;
        })
      })
      .catch(err => {
      console.log(err);
    })
  }

  // logout
  function logOut() {
    console.log('logOut')
    setUser(null);
    return signOut(auth);
  }

  // sign-in with Google authentication
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  // sign-in with Facebook authentication
  function facebookSignIn() {
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthProvider);
  }

  useEffect(() => {
    // handle authentication state changed events
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        console.log("Auth", currentUser);
        setUser(currentUser);
        const uid = currentUser.uid;
        console.log("uid", uid);
      } else {
        // User is signed out
        console.log("Signed out", currentUser, user);
      }
      setLoading(false);
    });

    // clean-up
    return () => {
      unsubscribe();
    };
  }, []); // runs once
  
  const value = useMemo(() => ({
    user, setUser, logIn, signUp, logOut, facebookSignIn, googleSignIn}),[user]) // updates when user changes

  return (
    // make the following methods available to child components
    <userAuthContext.Provider
      value={value}
    >
      {loading ? <div>Loading...</div> : children}
    </userAuthContext.Provider>
  );
}

// export context to allow the App to access the current user, login and out etc.
export function useUserAuth() {
  return useContext(userAuthContext);
}
