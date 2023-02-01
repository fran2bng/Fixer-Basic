import React from 'react'
import AuthProvider from '../Components/authProvider'
import { async } from "@firebase/util";
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, userExist } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function ChooseUsernameView() {

  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  
  const navigate = useNavigate();

  function handleOnUserNotRegistered(user) {
      setCurrentUser(user);
      setState(3);
      console.log(user.displayName);
}

function handleUserLoggedin(user) {
      navigate("/dashboard")
      console.log("bueenaaa");

}

function handleUserNotLoggedIn(user) {
}

if(state === 3) {

  return <div>

  <h1>bienvenido {currentUser.displayName} </h1>

  </div>

}
   return <AuthProvider
        onUserLoggedIn={handleUserLoggedin}
        onUserNotLoggedIn={handleUserNotLoggedIn}
        onUserNotRegistered={handleOnUserNotRegistered}>
  </AuthProvider>
}

