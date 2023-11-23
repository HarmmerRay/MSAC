/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './index.module.css'
import React, { useState } from 'react';
import comimg1 from './community2.png'
import comimg2 from './community3.png'

function Guess() {

    const [isVisible, setIsVisible] = useState(false);

    const handleToggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const [GuessCount] = useState({
        guesscount: [
            {
                "id": 1,
                "img": comimg1,
                "value": "爱仕达 30CM炒锅不粘锅NWG8330E电磁炉炒锅",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 2,
                "img": comimg2,
                "value": "阳光美包新款单肩包女包时尚子母包四件套",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 3,
                "img": comimg1,
                "value": "爱仕达 30CM炒锅不粘锅NWG8330E电磁炉炒锅",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 4,
                "img": comimg2,
                "value": "阳光美包新款单肩包女包时尚子母包四件套",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 5,
                "img": comimg1,
                "value": "爱仕达 30CM炒锅不粘锅NWG8330E电磁炉炒锅",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 6,
                "img": comimg2,
                "value": "阳光美包新款单肩包女包时尚子母包四件套",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 7,
                "img": comimg1,
                "value": "爱仕达 30CM炒锅不粘锅NWG8330E电磁炉炒锅",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 8,
                "img": comimg1,
                "value": "阳光美包新款单肩包女包时尚子母包四件套",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 9,
                "img": comimg2,
                "value": "爱仕达 30CM炒锅不粘锅NWG8330E电磁炉炒锅",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 10,
                "img": comimg1,
                "value": "阳光美包新款单肩包女包时尚子母包四件套",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 11,
                "img": comimg1,
                "value": "爱仕达 30CM炒锅不粘锅NWG8330E电磁炉炒锅",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
            {
                "id": 12,
                "img": comimg1,
                "value": "阳光美包新款单肩包女包时尚子母包四件套",
                "deposit": "￥116.00",
                "hyperlinks": "#"
            },
        ]
    })

    return (
        <>
            <div className={classes.guess_you_like}>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                </svg>
                <span className={classes.guess_you_like_font_a}>猜你喜欢</span>
                <span className={classes.guess_you_like_font_b} onClick={handleToggleVisibility}>换一换
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                    </svg>
                </span>
            </div>

            {!isVisible &&
                <div className={classes.guess_you_like_commodity}>
                    {GuessCount.guesscount.slice(0, 6).map((gus) => (
                        <div className={classes.guess_you_like_commodity_a} key={gus.id}>
                            <div><a><img src={gus.img} className={classes.guess_you_like_commodity_a_img}></img></a></div>
                            <div><a href={gus.hyperlinks}>{gus.value}</a></div>
                            <span>{gus.deposit}</span>
                        </div>
                    ))}
                </div >
            }

            {isVisible &&
                <div className={classes.guess_you_like_commodity}>
                    {GuessCount.guesscount.slice(6, 12).map((gus) => (
                        <div className={classes.guess_you_like_commodity_a} key={gus.id}>
                            <div><a><img src={gus.img} className={classes.guess_you_like_commodity_a_img}></img></a></div>
                            <div><a href={gus.hyperlinks}>{gus.value}</a></div>
                            <span>{gus.deposit}</span>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default Guess;