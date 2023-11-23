import React from "react";
import Classes from "./forgetPwd.module.css";
import ForgetPwd from "../../component/verificationPage/ForgetPwd/ForgetPwd";
import { Link } from "react-router-dom";
export default function ForgetPwdPage() {
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
        <ForgetPwd />
      </div>
    </div>
  );
}
