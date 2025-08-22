import React from "react";
import style from "../shared/ui/styles/Auth.module.css";
import Img from "../shared/ui/img/Create.svg";

const Create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.authBody}>
      <div className={style.card}>
        <form onSubmit={handleSubmit} className={style.form}>
          <h2 className={style.formTitle}>Create an account</h2>
          <h3 className={style.formSubtitle}>
            Use your name, email and password
          </h3>
          <input type="text" placeholder="Name" className={style.input} />
          <input type="email" placeholder="Email" className={style.input} />
          <input
            type="password"
            placeholder="Password"
            className={style.input}
          />
          <button type="submit" className={style.submitBtn}>
            Sign up
          </button>
        </form>
        <div className={style.hero}>
          <img src={Img} alt="Authorization" className={style.img} />
        </div>
      </div>
    </div>
  );
};

export default Create;
