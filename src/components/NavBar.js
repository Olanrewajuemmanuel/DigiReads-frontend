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
  const [cookies, setCookie, removeCookie] = useCookies(["user", "authorVerifiedStatus"]);
  const dispatch = useDispatch()
  const history = useHistory()
  const logOut = () => {
    removeCookie("user")
    removeCookie("authorVerifiedStatus")
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
            <a style={{ color: "dodgerblue", textDecoration: "underline", cursor: "pointer" }} onClick={logOut}>
            Logout
            </a>
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
