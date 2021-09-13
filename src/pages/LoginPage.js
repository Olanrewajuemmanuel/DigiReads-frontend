import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { HomePage } from "../routes/paths";
import { LOGIN } from "../schemas";

export default function LoginPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [err, setErr] = useState({})
    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const [handleSubmit, { loading, data }] = useMutation(LOGIN, {
        onError: (err) => {
            setErr(err)
            console.log(err);
        }
    })
    if (data) {
        dispatch({ type: "USER_LOGIN", payload: data.login })
        history.push(HomePage)
    }
  return (
    <div>
        { err ? err.message : null }
      <form onSubmit={e => {
          e.preventDefault()
          handleSubmit({ variables: {
              loginEmail: formData.email,
              loginPassword: formData.password
          } })
      }}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={handleFormChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={handleFormChange} />
        </div>
        <button button={loading}>Submit</button>
      </form>
      <p style={{ color: "dodgerblue" }}>Forgot password?</p>
    </div>
  );
}
