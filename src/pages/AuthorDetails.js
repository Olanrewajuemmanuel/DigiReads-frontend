import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router";
import AuthorBook from "../components/AuthorBook";
import { GET_AUTHOR } from "../schemas";

export default function AuthorDetails() {
  let { author_id } = useParams();
  const [err, setErr] = useState({});
  const { loading, data } = useQuery(GET_AUTHOR, {
    variables: { id: author_id },
    onError: (err) => {
      setErr(err);
    },
  });
  if (loading) return "Loading...";
  return (
    <div>
      {err ? err.message : null}
      {data && (
        <div className="author-wrapper">
          <p>
            Author: {data.getAuthor.name} <span>{data.getAuthor.status}</span>
          </p>
          <small>
            Joined{" "}
            {new Date(
              Number.parseInt(data.getAuthor.date_created)
            ).toLocaleDateString()}
          </small>
          <details>
            <summary>Author's Biography</summary>
            <p>{data.getAuthor.author_bio}</p>
          </details>
          <div className="book-wrapper">
            {data.getAuthor.books.map((book) => (
              <AuthorBook book={book} key={book.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
