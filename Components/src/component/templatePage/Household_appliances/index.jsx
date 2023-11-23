/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import classes from './index.module.css'
import { Carousel } from 'react-bootstrap';
import hous1 from './Household_appliances1.png'
import hous2 from './Household_appliances2.png'
import hous3 from './Household_appliances3.png'
import hous4 from './Household_appliances4.png'
import hous5 from './Household_appliances5.png'
import hous6 from './Household_appliances6.png'

function Household() {

    const [Household] = useState({
        household: [
            {
                "id": 1,
                "value": "节能补贴"
            },
            {
                "id": 2,
                "value": "4K电视"
            },
            {
                "id": 3,
                "value": "空气净化器"
            },
            {
                "id": 4,
                "value": "IH电饭煲"
            },
            {
                "id": 5,
                "value": "滚筒洗衣机"
            },
            {
                "id": 6,
                "value": "电热水器"
            },
            {
                "id": 7,
                "img": hous1
            },
            {
                "id": 8,
                "img": hous2
            },
            {
                "id": 9,
                "img": hous3
            },
            {
                "id": 10,
                "img1": hous5,
                "img2": hous6
            },
            {
                "id": 11,
                "img1": hous4,
                "img2": ''
            },
            {
                "id": 12,
                "img1": hous5,
                "img2": hous6
            },

        ]
    })
    return (
        <div className={classes.household_appliances}>
            <div className={classes.household_appliances_font}>家用电器</div>
            <div className={classes.household_appliances_img}>
                <div className={classes.household_appliances_img_a}>
                    <div className={classes.household_appliances_img_a_font}>
                        <ul>
                            {Household.household.slice(0, 6).map((hos) => (
                                <li key={hos.id}>{hos.value}</li>
                            ))}
                        </ul>

                        {Household.household.slice(6, 7).map((hos) => (
                            <div key={hos.id}><img src={hos.img}></img></div>
                        ))}
                    </div>
                </div>
                <div className={classes.household_appliances_img_b}>
                    <Carousel>
                        {Household.household.slice(7, 9).map((hos) => (
                            <Carousel.Item key={hos.id}>
                                <img
                                    className="d-block w-100"
                                    src={hos.img}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                {Household.household.slice(9, 12).map((hos) => (
                    <div className={classes.household_appliances_img_a} key={hos.id}>
                        <div><img src={hos.img1}></img></div>
                        <div><img src={hos.img2}></img></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Household;