/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import classes from './index.module.css'
import img from './commodity1.png'

function Hot() {
    const [HotSelling] = useState({
        hotselling: [
            {
                "id": 1,
                "img": img,
                "value": "【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机",
                "deposit": "定金:￥100.00",
                "hyperlinks": "#"
            },
            {
                "id": 2,
                "img": img,
                "value": "【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机",
                "deposit": "定金:￥100.00",
                "hyperlinks": "#"
            },
            {
                "id": 3,
                "img": img,
                "value": "【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机",
                "deposit": "定金:￥100.00",
                "hyperlinks": "#"
            },
            {
                "id": 4,
                "img": img,
                "value": "【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机",
                "deposit": "定金:￥100.00",
                "hyperlinks": "#"
            },
            {
                "id": 5,
                "img": img,
                "value": "【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机",
                "deposit": "定金:￥100.00",
                "hyperlinks": "#"
            },
        ]
    })
    return (
        <div className={classes.ranking}>
            <div className={classes.ranking_top}>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <p>热卖排行</p>
            </div>

            {HotSelling.hotselling.map((hot) => (
                <div className={classes.ranking_button_a} key={hot.id}>
                    <div><img src={hot.img}></img></div>
                    <div><a href={hot.hyperlinks}>{hot.value}</a></div>
                    <span>{hot.deposit}</span>
                </div>
            ))}
        </div>
    )
}

export default Hot;