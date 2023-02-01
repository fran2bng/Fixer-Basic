import { async } from "@firebase/util";
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, userExist } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../Components/authProvider";

export default function LoginView() {

  const navigate = useNavigate()
  
  const [state, setCurrentState] = useState(1);

  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function handleOnUserNotRegistered(user) {
    setCurrentState(3);
        navigate("/choose-username");
        console.log(user.displayName);
  }

  function handleUserLoggedin(user) {
    setCurrentState(2);
        navigate("/dashboard")
        console.log("bueenaaa");

  }

  function handleUserNotLoggedIn(user) {
    setCurrentState(4);
      console.log("no hay nadie auth");
  }

  if (state === 4)
    return (
      <div>
        <button onClick={handleOnClick}>Logeate con Google</button>
      </div>
    );

    return <AuthProvider 
        onUserLoggedIn={handleUserLoggedin}
        onUserNotLoggedIn={handleUserNotLoggedIn}
        onUserNotRegistered={handleOnUserNotRegistered}>

        <div>loadin...</div>
  </AuthProvider>
}

