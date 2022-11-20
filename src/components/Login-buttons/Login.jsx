import { GoogleLogin } from "react-google-login";
import { useAuth } from "../../pages/common/auth-context";
const clientId =
  "1019245327746-clsda0mi4enaunrcrl24k1l7n5sbjvp3.apps.googleusercontent.com";

export default function Login() {
  const { dispatch } = useAuth();

  const onSuccess = (res) => {
    console.log("success:", res.profileObj);
    dispatch({ type: "SET_AUTH", payload: res.profileObj });
  };
  const onFailure = (res) => {
    console.log("failed:", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
