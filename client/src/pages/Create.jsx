import { useEffect, useState } from "react";
import style from "../shared/ui/styles/Auth.module.css";
import Img from "../shared/ui/img/Create.svg";

import { Link } from "react-router-dom";

const Create = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const newUser = {
    id: new Date(),
    email: email,
    password: password,
    userName: userName,
  };

  async function handleNewUser() {
    try {
      const response = await fetch("http://localhost:5000/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Ошибка при создании пользователя");
      }

      const data = await response.json();
      console.log("User created:", data);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewUser();
  };

  return (
    <div className={style.authBody}>
      <div className={style.card}>
        <form onSubmit={handleSubmit} className={style.form}>
          <h2 className={style.formTitle}>Create an account</h2>
          <h3 className={style.formSubtitle}>
            Use your name, email and password
          </h3>
          <input
            type="text"
            placeholder="Name"
            className={style.input}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={style.submitBtn}>
            Sign up
          </button>
          <Link to="/authorization" className={style.link}>
            Enter
          </Link>
        </form>
        <div className={style.hero}>
          <img src={Img} alt="Authorization" className={style.img} />
        </div>
      </div>
    </div>
  );
};

export default Create;
