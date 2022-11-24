import React from "react";
import { useState } from "react";
import Add from "../img/addAvatar.png";
import { userData } from "../indexedDB";
import { Link } from "react-router-dom";

function Login() {
  const [image, setImage] = useState("");
  const [done, setDone] = useState(false);

  const getFile = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e[0]);
    reader.onload = (e) => {
      setImage(reader.result);
    };
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const name = e.target[1].value;
    const password = e.target[2].value;

    await userData.add({
      username: username,
      name: name,
      password: password,
      picture: image,
    });

    setDone(!done);
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Joseph's Chat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="username" />
          <input required type="text" placeholder="name" />
          <input required type="password" placeholder="password" />
          <input
            required
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => getFile(e.target.files)}
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Click to add a picture</span>
          </label>
          <button>Login</button>
        </form>
        {done && (
          <Link to="/users">
            <span>View list of users</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Login;
