import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import { DataProduct } from "../../assets/data/dataCarousel";
import 'swiper/css';

const Carousel = ({ cart }) => {
    return (
        <Link to="#" style={{ textDecoration: 'none', color: '#515151' }}>
            <Card style={{ width: "10rem", height:"10rem",margin: "auto", marginRight:"55%" }}>
                <Card.Img variant="top" style={{ height: "16rem" }} src={cart.image} />
            </Card>
        </Link>
    )
}

const Carousels = () => {
    return (
        <div>
            <Swiper
                slidesPerView={5}
                spaceBetween={-300}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                    },
                    968: {
                        slidesPerView: 5,
                    },
                }}
                className="m-5"
            >
                {DataProduct.map((cart) => (
                    <SwiperSlide key={cart.id}>
                        <Carousel cart={cart} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousels