import { Link, useHistory, Redirect } from "react-router-dom";
import {
  Authors,
  Forum,
  HomePage,
  Login,
  SignIn,
  Books,
} from "../routes/paths";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { USER_SIGN_OUT } from "../redux/types";

export default function NavBar() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const dispatch = useDispatch()
  const history = useHistory()
  const logOut = () => {
    removeCookie("user", { path: "/" })
    console.log(cookies);
    dispatch({ type: USER_SIGN_OUT })
    history.push(Login)
  }
  return (
    <div>
      <Link to={HomePage}>DigiReads</Link>
      <ul>
        <li>
          <Link to={Authors}>Find Authors</Link>
        </li>
        <li>
          <Link to={Books}>Explore books</Link>
        </li>
        <li>
          <Link to={Forum}>Forums</Link>
        </li>
      </ul>
      {/**User is signed in - conditional rendering */}
      {cookies.user ? (
        <div>
            <img src="" alt="profile-pic" />
            <p style={{ color: "dodgerblue", textDecoration: "underline", cursor: "pointer" }} onClick={logOut}>
            Logout
            </p>
        </div>
      ) : (
        <div className="auth">
          <li>
            <Link to={SignIn}>Sign in</Link>
          </li>
          <li>
            <Link to={Login}>Login</Link>
          </li>
        </div>
      )}
    </div>
  );
}
