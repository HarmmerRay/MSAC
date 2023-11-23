import { useState } from "react";
import logoImg from './logo.png';
import classes from './index.module.css'

/* eslint-disable jsx-a11y/alt-text */
function Logo() {
    const [logodata] = useState({
        logo:[
            {
                "id":1,
                "img":logoImg,
                "text":"搜索"
            }
        ]
    })
    return (
        <div className={classes.header}>
            <div className={classes.herder_logo}>
                {logodata.logo.map((logo) => (
                    <img src={logo.img} className={classes.header_img} key={logo.id} />
                ))}
            </div>
            <div className={classes.header_search}>
                <form method='get' action='component/templatePage/logo_and_Search_box#' className={classes.header_form}>
                    <input type='text' className={classes.header_text}></input>
                    {logodata.logo.map((logo) => (
                        <button className={classes.header_button}>{logo.text}</button>
                    ))}
                </form>
            </div>
        </div>
    )
}
export default Logo;