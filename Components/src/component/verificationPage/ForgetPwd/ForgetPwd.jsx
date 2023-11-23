import React from "react";
import { useState } from "react";
import Classes from "./forget.module.css";
import { Link } from "react-router-dom";
export default function ForgetPwd() {
  // 手机号正则
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validatePhone = (phone) => {
    const regex = /^1[0-9]{10}$/;
    return regex.test(phone);
  };
  const handleChange = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);
    setIsValid(validatePhone(newPhone));
  };
  // 账号正则
  const [count, setCount] = useState("");
  const [isCountValid, setCountVaild] = useState(false);

  const validCount = (count) => {
    const regexCount = /^[A-Za-z0-9_]+$/;
    return regexCount.test(count);
  };
  const handleCountChange = (countEvent) => {
    const newCount = countEvent.target.value;
    setCount(newCount);
    setCountVaild(validCount(newCount));
  };

  return (
    <div>
      <div className={Classes.box}>
        <p>忘记密码?</p>
        <p>输入您的电子邮件,手机号</p>
        <p>我们将向您发送密码重置说明</p>
        <input placeholder="账号" value={count} onChange={handleCountChange} />
        <br />
        {isCountValid ? <p>Count is valid</p> : <p>Count is invalid</p>}

        <input
          placeholder="手机号"
          type="text"
          value={phone}
          onChange={handleChange}
        />
        {isValid ? (
          <p>Phone number is valid</p>
        ) : (
          <p>Phone number is invalid</p>
        )}
        <button className={Classes.lo}>继续</button>
        <br />
        <Link to="/Login">返回到上一级</Link>
      </div>
    </div>
  );
}
