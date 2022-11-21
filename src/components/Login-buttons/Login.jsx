import { GoogleLogin } from "react-google-login";
import { useAuth } from "../../context/auth-context";

export default function Login() {
  const { dispatch } = useAuth();

  const onSuccess = (res) => {
    dispatch({ type: "SET_AUTH", payload: res.profileObj });
  };
  const onFailure = (res) => {
    alert("Something went wrong. Please try again later..");
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENTID}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
