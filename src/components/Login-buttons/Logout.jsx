import { GoogleLogout } from "react-google-login";
import { useAuth } from "../../pages/common/auth-context";
const clientId =
  "1019245327746-clsda0mi4enaunrcrl24k1l7n5sbjvp3.apps.googleusercontent.com";
//in video two here client id is different
export default function Logout() {
  const { dispatch } = useAuth();
  const onSuccess = () => {
    console.log("logout successfull");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
