import { useCookies } from "react-cookie";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { GET_USER } from "../schemas";
import { useQuery } from "@apollo/client";
import { Login, RegisterAuthor, Verify } from "../routes/paths";
import AuthorContent from "./AuthorContent";
import ReaderContent from "./ReaderContent";

export default function Home() {
  const [err, setErr] = useState({});
  const [cookies] = useCookies(["user"]);
  const { loading, data } = useQuery(GET_USER, {
    variables: {
      id: localStorage.getItem("userId"),
    },
    onError: (err) => {
      if (err) {
        setErr(err);
      }
    },
  });
  if (loading) return "loading...  DigiReads";
  if (err.message) return "Error in fetching user's data";
  return (
    <div>
      {/* 1. Check if user is logged in */}
      {!cookies.user && !data ? (
        <Redirect to={Login} />
      ) : (
        <div>
          {/* 2. Check if user's email is verified */}
          {!data.getUser.email_verified ? (
            <Link to={Verify}>Verify email address</Link>
          ) : (
            ""
          )}
          {/* 3. Seperate content to author or reader */}
          {data.getUser.user_category === "AUTHOR" ? (
            <AuthorContent authorId={data.getUser.id} />
          ) : (
            <ReaderContent readerId={data.getUser.id} />
          )}
        </div>
      )}
    </div>
  );
}
