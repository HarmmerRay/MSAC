/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Classes from "./login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");
  // 密码显示隐藏
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // 用户名正则
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleUsernameChange = (userEvent) => {
    const { value } = userEvent.target;
    setUsername(value);
    setIsValid(validateUsername(value));
  };
  const validateUsername = (username) => {
    // 定义用户名的正则表达式规则
    const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;

    // 点击登录
    return usernameRegex.test(username);
  };
  const handleSubmit = (e) => {
    if (window.localStorage.getItem("aaa") == null) {
      var A = JSON.stringify([]);
      window.localStorage.setItem("aaa", A);
    }
    e.preventDefault();
    // console.log(window.localStorage.getItem('aaa'));
    var userInfoData = JSON.parse(window.localStorage.getItem("aaa"));
    for (const items in userInfoData) {
      console.log("username：" + userInfoData[items].username);
      console.log("---password:" + userInfoData[items].password);
    }

    const matchUserInfo = userInfoData.find(
      (userInfoData) =>
        userInfoData.username === username && userInfoData.password === password
    );
    const matchUsername = userInfoData.find(
      (userInfoData) => userInfoData.username === username
    );
    const matchPassword = userInfoData.find(
      (userInfoData) => userInfoData.password === password
    );
    if (matchUserInfo) {
      setLoginStatus("登陆成功！");
      alert("登陆成功！");
      navigate("/mainPage");
    } else if (!matchUsername) {
      alert("请检查用户名!");
    } else if (!matchPassword) {
      alert("请检查密码");
    } else {
      alert("尚未注册,请点击注册");
    }
  };
  return (
    <div className={Classes.box}>
      <input
        placeholder="用户名"
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />
      {isValid ? (
        <p>用户名有效</p>
      ) : (
        <p>用户名无效，用户名必须由4至16个字符的字母、数字或下划线组成</p>
      )}
      <div className={Classes.pwd}>
        <input
          placeholder="密码"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
        />
        <img
          src={showPassword ? "/img/open.png" : "/img/close.png"}
          alt={showPassword ? "Hide password" : "Show password"}
          onClick={togglePasswordVisibility}
        />
      </div>
      <br />
      <Link to="/ForgetPwd" className={Classes.forget}>
        忘记密码？
      </Link>
      <button onClick={handleSubmit} className={Classes.lo}>
        登录
      </button>
      <br />
      <Link to="/Register">没有账号,立即注册</Link>
    </div>
  );
}
