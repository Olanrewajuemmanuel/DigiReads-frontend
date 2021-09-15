import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RegisterAuthor } from "../routes/paths";

export default function Home() {
  const userData = useSelector((state) => state.userReducer.userData);
  const [cookies] = useCookies(["authorVerifiedStatus"])
  localStorage.setItem("name", userData.firstName + " " +userData.lastName)
  localStorage.setItem("authorId", userData.id)
  localStorage.setItem("token", userData.token)
  return (
    <div>
      {userData.user_category === "AUTHOR" ? (
        <div>
          You are an author
          {cookies.authorVerifiedStatus ? (
            ""
          ) : (
            <Link to={RegisterAuthor}>
              Finish your author's registration to publish books
            </Link>
          )}
        </div>
      ) : (
        <div>Reader's content</div>
      )}
    </div>
  );
}
