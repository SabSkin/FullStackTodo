import React from "react";
import style from "../shared/ui/styles/Auth.module.css";
import Img from "../shared/ui/img/Auth.svg";
import { Link } from "react-router-dom";

const Auth = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.authBody}>
      <div className={style.card}>
        <form onSubmit={handleSubmit} className={style.form}>
          <h2 className={style.formTitle}>Authorization an account</h2>
          <h3 className={style.formSubtitle}>Use your email and password</h3>
          <input type="email" placeholder="Email" className={style.input} />
          <input
            type="password"
            placeholder="Password"
            className={style.input}
          />
          <button type="submit" className={style.submitBtn}>
            Entrance
          </button>

          <div className={style.linksWrapper}>
            <Link to="/create-account" className={style.link}>
              Register
            </Link>
            <Link to="/recover" className={style.link}>
              Recover the password
            </Link>
          </div>
        </form>

        <div className={style.hero}>
          <img src={Img} alt="Authorization" className={style.img} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
