import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import { DataProduct } from "../../assets/data/data";
import 'swiper/css';

const Cards = ({ cart }) => {
    return (
        <Link to="#" style={{ textDecoration: 'none', color: '#515151' }}>
            <Card style={{ width: "16rem",margin: "auto" }}>
                <Card.Img variant="top" style={{height:"16rem"}} src={cart.image} />
                <Card.Body>
                    <Card.Title>{cart.ProductName}</Card.Title>
                    <Card.Text>Category: {cart.Category}</Card.Text>
                    <Card.Text>Price: {cart.Price}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};
const CardProduct = () => {
    return (
        <div>
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                breakpoints={{
                    768: {
                        slidesPerView: 5,
                    },
                }}
                className="m-5"
            >
                {DataProduct.map((cart) => (
                    <SwiperSlide key={cart.id}>
                        <Cards cart={cart} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default CardProduct;
