/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Classes from "./register.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();

  // 设置密码显示隐藏
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    console.log("value" + event.target.value);
    const filter = event.target.value.replace(/[\s\u4e00-\u9fa5]/g, "");
    setPassword(filter);
    console.log("密码" + password);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // 再次设置密码显示隐藏

  const [rePassword, reSetPassword] = useState("");
  const [reShowPassword, reSetShowPassword] = useState(false);

  const rehandlePasswordChange = (revent) => {
    reSetPassword(revent.target.value);
  };
  const retogglePasswordVisibility = () => {
    reSetShowPassword(!reShowPassword);
  };
  // 用户名正则
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleUsernameChange = (userEvent) => {
    // const value=userEvent.target.value;  解构赋值
    const { value } = userEvent.target;
    console.log(userEvent.target);
    setUsername(value);
    setIsValid(validateUsername(value));
  };
  const validateUsername = (username) => {
    // 定义用户名的正则表达式规则
    const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
    return usernameRegex.test(username);
  };
  // 手机号正则
  const [phone, setPhone] = useState("");
  const [isPhoneVaild, setIsPhoneVaild] = useState(false);
  const validatePhone = (phone) => {
    const regex = /^1[0-9]{10}$/;
    return regex.test(phone);
  };

  const handlePhoneChange = (event) => {
    const newPhone = event.target.value.replace(/[^\d]/g, ""); //过滤空格
    setPhone(newPhone);
    setIsPhoneVaild(validatePhone(newPhone));
  };

  // 密码正则
  const [passwordReg, setPasswordReg] = useState("");
  const [isVaildPwdRex, setValidPwdRgx] = useState(false);

  const handlePwdRegChange = (eventReg) => {
    const value = eventReg.target.value;
    setPasswordReg(value);
    setValidPwdRgx(isValidPassword(value));
  };
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };
  // 确认密码
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConVaild, setConValid] = useState(false);

  const handleConPwd = (ConEvent) => {
    const value = ConEvent.target.value;
    setConfirmPassword(value);
  };
  const handleCompare = () => {
    const passwordsMatch = password === confirmPassword;
    setConValid(passwordsMatch);
  };

  const IsAllValid = () => {
    // cun->字符串  qu->字符串转数组
    if (isValid && isVaildPwdRex && isPhoneVaild && isConVaild) {
      // var A=JSON.stringify([
      //   {username:"123ASDa",password:"123ASDa"},
      //   {username:"123ASDb",password:"123ASDb"},
      //   {username:"123ASDc",password:"123ASDc"}
      // ])
      // window.localStorage.setItem('aaa',A);
      if (window.localStorage.getItem("aaa") == null) {
        var A = JSON.stringify([]);
        window.localStorage.setItem("aaa", A);
      }
      var userInfoData = JSON.parse(window.localStorage.getItem("aaa"));
      // 左面每一项  右面数组
      for (const item in userInfoData) {
        // console.log(typeof(userInfoData[item]));
        console.log(userInfoData[item].username);
        if (username === userInfoData[item].username) {
          alert("用户名已存在！");
          return;
        }
      }
      let Arr = [...userInfoData];
      Arr.push({ username: username, password: password });
      console.log("asdfghj" + Arr);
      var B = JSON.stringify(Arr);
      window.localStorage.setItem("aaa", B);
      alert("注册成功");
      navigate("/login");
      console.log(window.localStorage.getItem("aaa"));
    } else {
      alert("请检查所填信息的正确性！");
    }
  };

  /*   // 创建一个数组用来接收塞进来的值  
  const [arr,setArr]=useState();
  
  // 存储数据到浏览器缓存
  localStorage.setItem('Information', arr);

 */
  return (
    <div className={Classes.box}>
      <p className={Classes.crt}>Create Your Tome Account</p>
      <input
        placeholder="用户名"
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />
      {isValid ? (
        <p className={Classes.p}>用户名有效</p>
      ) : (
        <p className={Classes.p}>
          用户名无效，用户名必须由4至16个字符的字母、数字或下划线组成
        </p>
      )}
      <div className={Classes.pwd}>
        <input
          placeholder="密码"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          onKeyUp={(e) => {
            handlePwdRegChange(e);
            handleCompare(e);
          }}
        />
        <img
          src={showPassword ? "/img/open.png" : "/img/close.png"}
          alt={showPassword ? "Hide password" : "Show password"}
          onClick={togglePasswordVisibility}
        />
      </div>
      {isVaildPwdRex ? (
        <span style={{ color: "green" }}>密码正确</span>
      ) : (
        <span style={{ color: "red" }}>密码不正确</span>
      )}
      {/* ------------------------- */}
      <div className={Classes.rePwd}>
        <input
          placeholder="确认密码"
          type={reShowPassword ? "text" : "password"}
          value={rePassword}
          onChange={(e) => {
            rehandlePasswordChange(e);
            handleConPwd(e);
          }}
          onKeyUp={handleCompare}
        />
        <img
          src={reShowPassword ? "/img/open.png" : "/img/close.png"}
          alt={reShowPassword ? "Hide password" : "Show password"}
          onClick={retogglePasswordVisibility}
        />
      </div>
      {isConVaild ? <p>密码匹配</p> : <p>密码不匹配</p>}

      <input
        type="text"
        placeholder="手机号"
        value={phone}
        onChange={handlePhoneChange}
      />
      {isPhoneVaild ? (
        <p className={Classes.p}>手机号合法</p>
      ) : (
        <p className={Classes.p}>手机号不合法</p>
      )}
      <Link to="/Login">已有账号，去登录</Link>
      <button onClick={IsAllValid}>注册</button>
      <br />
    </div>
  );
}
