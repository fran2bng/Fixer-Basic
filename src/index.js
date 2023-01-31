import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./routes/loginView";
import Dashboard from "./routes/dashboard";
import EditProfileView from "./routes/dashboardProfile";
import SignOutView from "./routes/signnout";
import PublicProfileView from "./routes/uusername"; 
import ChooseUsernameView from "./routes/chooseUsername";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="login" element= { <LoginView/> } /> 
      <Route path="dashBoard" element={<Dashboard/> }/> 
      <Route path="dashBoard/profile" element={<EditProfileView/>} /> 
      <Route path="signnout" element={<SignOutView/>} /> 
      <Route path="u/:username" element={<PublicProfileView/> } />
      <Route path="choose-username" element= {<ChooseUsernameView />} />
    </Routes>
  </BrowserRouter>
);