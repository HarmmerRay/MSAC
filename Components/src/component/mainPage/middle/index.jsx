import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./index.module.css";
import Navbar from "../../templatePage/navbar";
import Logo from "../../templatePage/logo_and_Search_box";
import Category from "../../templatePage/Product_category_bar";
import Leftnav from "../../templatePage/Left_navigation_bar";
import CarouselMap from "../../templatePage/Carousel_map";
import Rightnav from "../../templatePage/Right_navigation_bar";
import Recommended from "../../templatePage/Recommended_today";
import Hot from "../../templatePage/Hot_Selling_Rankings";
import Guess from "../../templatePage/Guess_you_like";
import Household from "../../templatePage/Household_appliances";
import BottomMenu from "../../templatePage/Bottom_menu";
import BackToTop from "../../templatePage/Back_to_top";
import { useState } from "react";

export default function Middle(props) {
  const [domState, setDomState] = useState({
    Navbar: {
      isClick: false,
    },
    Logo: {
      isClick: false,
    },
  });

  const handleState = (key, e) => {
    e.stopPropagation();
    console.log(key);
    const newState = { ...domState };
    newState[key].isClick = !domState[key].isClick;
    console.log(newState[key].isClick);

    for (var item in newState) {
      if (item !== key) {
        newState[item].isClick = false;
      }
    }
    setDomState(newState);
  };

  const initState = () => {
    const newState = { ...domState };
    for (var item in newState) {
      newState[item].isClick = false;
    }
    setDomState(newState);
  };
  return (
    <div className={classes.container} style={{ width: props.width + "%" }} onClick={()=>{
      props.handlehtmlClick("null");initState();
    }}>
      {
        props.activecomponent==="#"&&<div className={classes.moren}>请选择一个HTML模板</div>
      }
      {props.activecomponent === "a" && (
        <div className={classes.box}>
          <span>123</span>
          <button
            onClick={() => props.handlehtmlClick(0)}
            className={classes.button}
          >
            我是按钮0
          </button>
          <button
            onClick={() => props.handlehtmlClick(1)}
            className={classes.button}
          >
            我是按钮1
          </button>
        </div>
      )}

      {props.activecomponent === "b" && (
        <div>
          <div className={classes.overall}>
            {/* 顶部菜单栏 */}
            <Navbar
              style={props.thevalue}
              dianji={handleState}
              clickHtml={props.handlehtmlClick}
              className={domState.Navbar.isClick ? "dom_active" : ""}
            />
            {/* logo与搜索框 */}
            <Logo></Logo>
            {/* 商品分类栏 */}
            <Category></Category>

            <hr className={classes.partition}></hr>

            <div className={classes.centernav}>
              {/* 左侧导航栏 */}
              <Leftnav></Leftnav>

              {/* 轮播图 */}
              <CarouselMap></CarouselMap>

              {/* 右侧推荐栏 */}
              <Rightnav></Rightnav>
            </div>

            {/* 今日推荐 */}
            <Recommended></Recommended>

            {/* 热卖排行 */}
            <Hot></Hot>

            {/* 猜你喜欢 */}
            <Guess></Guess>

            {/* 家用电器 */}
            <Household></Household>

            <Household></Household>

            {/* 页尾 */}
            <BottomMenu></BottomMenu>
          </div>
        </div>
      )}

      {props.activecomponent === "c" && <div className={classes.box2}>123</div>}
      {props.activecomponent === "d" && <div className={classes.box3}>123</div>}
    </div>
  );
}
