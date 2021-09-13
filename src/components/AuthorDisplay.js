import { Link } from "react-router-dom";
import { Author } from "../routes/paths";

function AuthorDisplay({
  author: { name, author_bio, date_created, status, id },
}) {
  return (
    <div className="author-card">
      <h3>
        <Link to={Author + `/${name}/${id}`}> {name}</Link>
        <span> {status}</span>
      </h3>
      <p>{author_bio}</p>
      <p>
        Joined DigiReads on{" "}
        {new Date(Number.parseInt(date_created, 10)).toLocaleDateString()}
      </p>
    </div>
  );
}

export default AuthorDisplay;
