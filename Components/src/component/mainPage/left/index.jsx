import React from "react";
import classes from "./index.module.css";
export default function Left(props) {
    return (
        // <div className={`${classes.container} ${!props.isVisible ? classes.slideOutLeft : ''}`} style={{ width: props.width + "%" }}>
        <div className={classes.container} style={{ width: props.width + "%" }}>
            <span className={classes.text}>缩略图</span>
            <div className={classes.bigbox}>
                <div className={classes.box} onClick={() => props.handleonclick("a")}>
                    <img src="/home/zy_/MSAC/Components/src/img/min1.png" alt="" />
                </div>
                <div className={classes.box} onClick={() => props.handleonclick("b")}>
                    <img src="/home/zy_/MSAC/Components/src/img/min2.png" alt="" />
                </div>
                <div className={classes.box} onClick={() => props.handleonclick("c")}>
                    <img src="/home/zy_/MSAC/Components/src/img/添加.png" alt="" />
                </div>
                <div className={classes.box} onClick={() => props.handleonclick("d")}>
                    <img src="/home/zy_/MSAC/Components/src/img/添加.png" alt="" />
                </div>
            </div>
        </div>
    );
}