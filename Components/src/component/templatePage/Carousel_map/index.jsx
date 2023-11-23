import { Carousel } from 'react-bootstrap';
import carouselmap1 from './carouselmap1.png'
import carouselmap2 from './carouselmap2.png'
import { useState } from 'react';
import classes from './index.module.css'
function Carousel_map() {
    const [carouselmap] = useState({
        carouselmap: [
            {
                "id": 1,
                "img": carouselmap1
            },
            {
                "id": 2,
                "img": carouselmap2
            }
        ]
    })
    return (
        <div className={classes.carouselmap}>
            <Carousel>
                {carouselmap.carouselmap.map((car) => (
                    <Carousel.Item key={car.id}>
                        <img className="d-block w-100" src={car.img} alt="First slide" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Carousel_map;