import React from "react";
import { Link } from "react-router-dom";
import Classes from "./page.module.css";
import Login from "../../component/verificationPage/Login/Login";
export default function LoginPage() {
  return (
    <div className={Classes.box}>
      <div className={Classes.head}>
        <Link id={Classes.link} to="/">
          <div className={Classes.logo}>
            <img src="/home/zy_/MSAC/Components/src/img/logo.png" alt="logo" />
          </div>
          <p className={Classes.tittle}>Tome</p>
        </Link>
      </div>

      <div className={Classes.login}>
        <Login />
      </div>
    </div>
  );
}
