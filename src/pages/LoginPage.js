import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { HomePage } from "../routes/paths";
import { LOGIN } from "../schemas";
import { useCookies } from "react-cookie";
import { USER_LOGIN } from "../redux/types";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["user"]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({});
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [handleSubmit, { loading, data }] = useMutation(LOGIN, {
    onError: (err) => {
      setErr(err);
    },
    onCompleted: (data) => {
      setCookie("user", Date.now() + data.login.id, { path: "/" });
      dispatch({ type: USER_LOGIN, payload: data.login });
    }
  });

  return (
    <div>
      {cookies.user ? (
        <Redirect to={HomePage} />
      ) : (
        <div className="login">
          {err ? err.message : null}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await handleSubmit({
                variables: {
                  loginEmail: formData.email,
                  loginPassword: formData.password,
                },
              });

            }}
          >
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleFormChange}
              />
            </div>
            <button type="submit" disabled={loading}>Submit</button>
          </form>
          <p style={{ color: "dodgerblue" }}>Forgot password?</p>
        </div>
      )}
    </div>
  );
}
