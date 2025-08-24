import React from "react";
import style from "../shared/ui/styles/Auth.module.css";
import Img from "../shared/ui/img/Recover.svg";

const Recover = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.authBody}>
      <div className={style.card}>
        <form onSubmit={handleSubmit} className={style.form}>
          <h2 className={style.formTitle}>Recover the password</h2>
          <input type="email" placeholder="Email" className={style.input} />
          <input
            type="password"
            placeholder="New Password"
            className={style.input}
          />
          <button type="submit" className={style.submitBtn}>
            Entrance
          </button>
        </form>

        <div className={style.hero}>
          <img src={Img} alt="Authorization" className={style.imgRecover} />
        </div>
      </div>
    </div>
  );
};

export default Recover;
