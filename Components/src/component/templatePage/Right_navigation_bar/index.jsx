/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react";
import classes from './index.module.css'
import Icon1 from './icon1.png';
import Icon2 from './icon2.png';
import RecommendedChart from './Recommended_Chart.png';


function Rightnav() {
    const [TopNav] = useState({
        TopNav: [
            {
                "id": 1,
                "name": "【特惠】备战开学季 全民半价购数码",
                "hyperlinks": "#"
            },
            {
                "id": 2,
                "name": "【特惠】备战开学季 全民半价购数码",
                "hyperlinks": "#"
            },
            {
                "id": 3,
                "name": "【特惠】备战开学季 全民半价购数码",
                "hyperlinks": "#"
            },
            {
                "id": 4,
                "name": "【特惠】备战开学季 全民半价购数码",
                "hyperlinks": "#"
            },
            {
                "id": 5,
                "name": "【特惠】备战开学季 全民半价购数码",
                "hyperlinks": "#"
            },
            {
                "id": 6,
                "name": "【特惠】备战开学季 全民半价购数码",
                "hyperlinks": "#"
            },
            {
                "id": 7,
                "name": "【特惠】备战开学季 全民半价购数码",
                "hyperlinks": "#"
            },
            {
                "id": 8,
                "name": "【特惠】备战开学季 全民半价购数码",
                "hyperlinks": "#"
            },
            {
                "id": 9,
                "name": "企业购",
                "img": Icon2,
                "hyperlinks": "#"
            },
            {
                "id": 10,
                "name": "企业购",
                "img": Icon1,
                "hyperlinks": "#"
            },
            {
                "id": 11,
                "name": "企业购",
                "img": Icon2,
                "hyperlinks": "#"
            },
            {
                "id": 12,
                "name": "企业购",
                "img": Icon1,
                "hyperlinks": "#"
            },
            {
                "id": 13,
                "name": "企业购",
                "img": Icon2,
                "hyperlinks": "#"
            },
            {
                "id": 14,
                "name": "企业购",
                "img": Icon1,
                "hyperlinks": "#"
            },
            {
                "id": 15,
                "name": "企业购",
                "img": Icon2,
                "hyperlinks": "#"
            },
            {
                "id": 16,
                "name": "企业购",
                "img": Icon1,
                "hyperlinks": "#"
            },
            {
                "id": 17,
                "name": "企业购",
                "img": Icon2,
                "hyperlinks": "#"
            },
            {
                "id": 18,
                "name": "企业购",
                "img": Icon1,
                "hyperlinks": "#"
            },
            {
                "id": 19,
                "name": "企业购",
                "img": Icon2,
                "hyperlinks": "#"
            },
            {
                "id": 20,
                "name": "企业购",
                "img": Icon1,
                "hyperlinks": "#"
            },
            {
                "id": 21,
                "img": RecommendedChart
            },
        ]
    })

    return (
        <div className={classes.right_nacbar}>
            <div className={classes.right_nacbar_top}>
                <div className={classes.right_nacbar_top_a}>
                    <span className={classes.font_a}>快报</span>
                    <span className={classes.font_b}><a href='component/templatePage/Right_navigation_bar#'>更多</a></span>
                </div>

                <hr />
                <div>
                    <ul>
                        {TopNav.TopNav.slice(0, 8).map((nav) => (
                            <li key={nav.id}><a href={nav.hyperlinks}>{nav.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={classes.right_nacbar_center}>
                <ul>
                    {TopNav.TopNav.slice(8, 20).map((nav) => (
                        <li key={nav.id}>
                            <a href={nav.hyperlinks}><img src={nav.img}></img></a>
                            <p>{nav.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={classes.right_nacbar_buttom}>
                {TopNav.TopNav.slice(20).map((nav) => (
                    <img src={nav.img} key={nav.id}></img>
                ))}
            </div>
        </div>
    )
}

export default Rightnav;