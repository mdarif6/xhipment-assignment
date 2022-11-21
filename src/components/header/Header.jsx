import React from "react";
import Login from "../Login-buttons/Login";
import Logout from "../Login-buttons/Logout";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import "./Header.css";
import { useAuth } from "../../context/auth-context";

export default function Header() {
  const { state } = useAuth();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENTID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div>
      <header className="post-header">
        <div className="post-header-heading">Xhipment blog</div>

        <div className="post-login-buttons">
          {state.userDetails.googleId ? <Logout /> : <Login />}
        </div>
      </header>
    </div>
  );
}
