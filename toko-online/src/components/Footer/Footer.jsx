import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div style={{ display: "flex", justifyContent: "space-between", marginRight: "53%" }}>
                <div>
                    <div>
                        <h4 className="fs-3">Toko-Ku</h4>
                        <p style={{ marginBottom: "3px", fontFamily: "sans-serif" }}>
                            <a href="#" className="custom-link">
                                Privacy Policy
                            </a>
                        </p>
                        <p style={{ marginBottom: "3px", fontFamily: "sans-serif" }}>
                            <a href="#" className="custom-link">
                                Help Center
                            </a>
                        </p>
                        <p style={{ fontFamily: "sans-serif" }}>
                            <a href="#" className="custom-link">
                                Term & COndition
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <Col>
                        <h4 className="fs-3">About</h4>
                        <p style={{ marginBottom: "3px", fontFamily: "sans-serif" }}>
                            <a href="#" className="custom-link">
                                Privacy Policy
                            </a>
                        </p>
                        <p style={{ marginBottom: "3px", fontFamily: "sans-serif" }}>
                            <a href="#" className="custom-link">
                                Help Center
                            </a>
                        </p>
                        <p style={{ fontFamily: "sans-serif" }}>
                            <a href="#" className="custom-link">
                                Term & COndition
                            </a>
                        </p>
                    </Col>
                </div>
                <div>
                    <Col>
                        <h4 className="fs-3">Follow Us</h4>
                        <div>
                            <a href="#" style={{ marginRight: "15px" }}>
                                <i style={{ fontSize: "30px", color: "#3b5998" }} className="bi bi-facebook"></i>
                            </a>
                            <a href="#" style={{ marginRight: "15px" }}>
                                <i style={{ fontSize: "30px", color: "black" }} className="fa-brands fa-threads"></i>
                            </a>
                            <a href="#" style={{ marginRight: "15px" }}>
                                <i style={{ fontSize: "30px", color: "#DD2A7B" }} className="bi bi-instagram"></i>
                            </a>
                            <a href="#">
                                <i style={{ fontSize: "30px", color: "black" }} className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </Col>
                </div>
            </div>
            <div className="">
                <Col style={{ marginLeft: "70%", marginTop: "-10%" }}>
                    <div className="Boxs"></div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="boxs1"></div>
                        <div className="boxs2"></div>
                    </div>
                </Col>
            </div>
            <div className="build"></div>
        </div>
    );
};
export default Footer;