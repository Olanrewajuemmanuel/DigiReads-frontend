import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../schemas";
import { Redirect } from "react-router-dom";
import { Verify } from "../routes/paths";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

export default function SignUpPage() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["user"]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    user_category: "AUTHOR", // default value for <select>
    password: "",
  });
  const [submitErr, setSubmitErr] = useState({});
  const [handleSubmit, { loading, data }] = useMutation(CREATE_USER, {
    onError: (err) => {
      setSubmitErr(err);
    },
  });
  const formOnChange = (e) => {
    if (e.target.tagName != "checkbox") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div>
      {cookies.user ? (
        <Redirect to={Verify} />
      ) : (
        <div>
          {submitErr ? submitErr.message : null}

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await handleSubmit({
                variables: {
                  createNewUserInput: formData,
                },
              });
              if (data) {
                dispatch({ type: "USER_CREATED", payload: data.createNewUser });
                setCookie("user", Date.now() + data.createNewUser.id, {
                  path: "/",
                });
              }
            }}
          >
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" name="firstName" onChange={formOnChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName" onChange={formOnChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" onChange={formOnChange} />
            </div>
            <div className="form-group">
              <label htmlFor="user_category">
                Are you a Reader or Author i:
              </label>
              <select
                name="user_category"
                onChange={formOnChange}
                value={formData.user_category}
              >
                <option value="Choose a category" disabled>
                  Choose a category
                </option>
                <option value="AUTHOR">Author</option>
                <option value="READER">Reader</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" onChange={formOnChange} />
            </div>
            <button disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
          <button>Sign in with Google</button>
          <button>Sign in with Facebook</button>
        </div>
      )}
    </div>
  );
}
