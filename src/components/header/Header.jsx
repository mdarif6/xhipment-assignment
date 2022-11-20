import React, { useState } from "react";
import Login from "../Login-buttons/Login";
import Logout from "../Login-buttons/Logout";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import "./Header.css";
import { useAuth } from "../../pages/common/auth-context";

const clientId =
  "1019245327746-clsda0mi4enaunrcrl24k1l7n5sbjvp3.apps.googleusercontent.com";

export default function Header() {
  const { state, dispatch } = useAuth();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  // var accessToken = gapi.auth.getToken().access_token;

  return (
    <div>
      <header className="post-header">
        <div> JSONPlaceholder Posts</div>

        <div className="post-login-buttons">
          {state.userDetails.googleId ? <Logout /> : <Login />}
        </div>
      </header>
    </div>
  );
}
