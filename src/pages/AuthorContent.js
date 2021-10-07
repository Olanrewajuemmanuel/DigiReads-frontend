import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { RegisterAuthor } from "../routes/paths";
import { GET_AUTHOR_FROM_USER } from "../schemas";

function AuthorContent({ authorId }) {
  const { loading, data } = useQuery(GET_AUTHOR_FROM_USER, {
    variables: {
      id: authorId,
    },
  });
  if (loading) return "Loading ... DigiReads";
  return (
    <div>
      {/** check if author has registered details */}
      {!data.getAuthorWithUserId.verified ? (
        <Link to={RegisterAuthor}>Complete your author registration</Link>
      ) : (
        ""
      )}
      {console.log(data)}
    </div>
  );
}

export default AuthorContent;
