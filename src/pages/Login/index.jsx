import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/features/authSlice";
import "./style.css";
export const fullCenterStyle = {
  width: "98vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const signedInData = {
        id: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        profilePic: result.user.photoURL,
      };
      dispatch(userLogin(signedInData)); // Use the action creator
      navigate("/events");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div style={fullCenterStyle}>
      <span>Sign In With Google</span>
      <button
        onClick={SignInWithGoogle}
        type="button"
        className="login-with-google-btn"
        style={{ marginTop: "20px" }}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
