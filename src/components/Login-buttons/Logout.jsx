import { GoogleLogout } from "react-google-login";
import { useAuth } from "../../context/auth-context";

export default function Logout() {
  const { dispatch } = useAuth();
  const onSuccess = () => {
    console.log("logout successfull");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
