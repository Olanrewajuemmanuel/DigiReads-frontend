import { useQuery } from "@apollo/client";
import { useState } from "react";
import AuthorDisplay from "../components/AuthorDisplay";
import { GET_AUTHORS } from "../schemas";

export default function AuthorsPage() {
  const [err, setErr] = useState({});
  const { loading, data, refetch } = useQuery(GET_AUTHORS, {
    onError: (err) => {
      setErr(err);
    },
    variables: {
      order: "ASC",
    },
  });
  if (loading) return loading;
  return (
    <div>
      {err.message ? (
        <p>
          {err.message}, Try <p onClick={() => refetch()}>refetching</p>
        </p>
      ) : null}
      {
         data && data.getAuthors.map(author => 
            <AuthorDisplay author={author} key={author.id} />
            )
      }
    </div>
  );
}
