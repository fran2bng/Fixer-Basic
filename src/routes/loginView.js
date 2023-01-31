import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase";

export default function LoginView() {
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } 
    catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button onClick={handleOnClick}>Logeate con Google</button>
    </div>
  );
};
