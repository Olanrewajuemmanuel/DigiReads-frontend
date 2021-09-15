import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { REGISTER_AUTHOR } from "../schemas";

function AuthorRegistration() {
  const [formData, setFormData] = useState({
    authorName: "",
    authorBio: "",
  });
  const [err, setErr] = useState({});
  const userData = useSelector((state) => state.userReducer.userData);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [handleSubmit, { loading, data }] = useMutation(REGISTER_AUTHOR, {
    onError: (err) => {
      setErr(err);
      console.log(err);
    },
    onCompleted: (data) => {
      if (data) {
        console.log(data);
      }
    },
  });
  return (
    <div>
      {err ? err.message : ""}
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
              userId: userData.id || localStorage.getItem("authorId"),
            },
          });
        }}
      >
        <div className="form-group">
          <label htmlFor="authorName">
            Your preferred author name (defaults to first name and last name):
          </label>
          <input type="name" name="authorName" onChange={handleChange} />
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
        <div className="next">
          <a>Next step: Fill books you have written</a>
          <a>Skip</a>
        </div>
      </form>
    </div>
  );
}

export default AuthorRegistration;
