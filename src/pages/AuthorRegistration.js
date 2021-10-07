import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { AUTHOR_VERIFIED } from "../redux/types";
import { HomePage, Login } from "../routes/paths";
import { GET_AUTHOR, REGISTER_AUTHOR } from "../schemas";

function AuthorRegistration() {
  const [cookies, setCookie] = useCookies(["authorVerifiedStatus", "user"]);
  const [formData, setFormData] = useState({
    authorName: localStorage.getItem("name"),
    authorBio: "",
  });
  const [err, setErr] = useState({});
  const userData = useSelector((state) => state.userReducer.userData);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [handleSubmit, { loading, data }] = useMutation(REGISTER_AUTHOR, {
    onError: (err) => {
      setErr(err);
    },
    onCompleted: (data) => {
      if (data) {
        // dispatch to store
        dispatch({ type: AUTHOR_VERIFIED, payload: data.createNewAuthor })
        // cookie (maybe)
        setCookie("authorVerifiedStatus", data.createNewAuthor.verified, {
          path: "/",
        });
      }
    },
  });
  return (
    <div className="container">
      {/* 1. display page if there is a user in session, else redirect to login */}
      {cookies.user ? (
        <div>
          {err ? err.message : ""}
          {/* 2. If data is saved, hide form and show next */}
          {cookies.authorVerifiedStatus ? (
            <div className="next" aria-hidden={!data}>
              <a>Next step: Fill books you have written</a>
              <Link to={HomePage}>Skip</Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({
                  variables: {
                    authorInput: {
                      name: formData.authorName || localStorage.getItem("name"),
                      author_bio: formData.authorBio,
                      status: "NEW",
                    },
                    userId: localStorage.getItem("userId"),
                  },
                });
              }}
            >
              <div className="form-group">
                <label htmlFor="authorName">
                  Your preferred author name (defaults to first name and last
                  name):
                </label>
                <input type="name" name="authorName" onChange={handleChange} placeholder={formData.authorName} />
              </div>
              <div className="form-group">
                <label htmlFor="authorBio">
                  Tell us about your journey as an author (a short bio):
                </label>
                <textarea
                  name="authorBio"
                  rows="5"
                  cols="50"
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      ) : (
        <Redirect to={Login} />
      )}
    </div>
  );
}

export default AuthorRegistration;
