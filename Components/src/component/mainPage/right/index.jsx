import React from "react";
import classes from "./index.module.css";
export default function Right(props) {
  // console.log(props.width + "%");
  return (
    <div className={classes.container} style={{ width: props.width + "%" }}>
      <span>请选择DOM元素</span>
     
      {props.showinput === 0 && (
        <div>
          <input
            type="text"
            placeholder="我是输入框0"
            onChange={props.handleinputChange}
          ></input>
          <button>我是输入框0的按钮</button>
        </div>
      )}
      {props.showinput === 1 && (
        <div>
          <input
            type="text"
            placeholder="我是输入框1"
            onChange={props.handleinputChange}
          ></input>
          <button>我是输入框1的按钮</button>
        </div>
      )}
      {props.showinput === 2 && (
        <div>
          <input
            type="text"
            placeholder="请输入div1的宽"
            onChange={(e) => {
              props.handleinputChange(e, 2);
            }}
          ></input>
          <button onClick={props.tiJiao}>我是输入框1的按钮</button>
        </div>
      )}
      {props.showinput === 3 && (
        <div>
          <input
            type="text"
            placeholder="请输入div2的宽"
            onChange={(e) => {
              props.handleinputChange(e, 3);
            }}
          ></input>
          <button onClick={props.tiJiao}>我是输入框2的按钮</button>
        </div>
      )}
      {props.showinput === "Navbar" && (
        <div>
          <input
            type="text"
            placeholder="请输入Navbar的背景颜色"
            onChange={(e) => {
              props.handleinputChange(e, "Navbar");
            }}  
          />
          <br />
          <button onClick={props.tiJiao}>确认修改背景颜色</button>
          <input
            type="text"
            placeholder="请输入Navbar的URL路径"
          />
          <button onClick={(e)=>{props.tiJiao();alert("URL:"+"保存成功")}}>确认提交URL地址</button>
        </div>
      )}
    </div>
  );
}
