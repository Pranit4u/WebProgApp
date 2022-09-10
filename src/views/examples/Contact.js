
import React from "react";
import {
    Card, Container, Row, Col,
} from "reactstrap";
import { SocialIcon } from 'react-social-icons';



function Contact() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    return (
        <>
            <div
                id="contact"
                className="section section-image section-login"
                style={{
                    backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
                }}
            >
                <div className="filter" />
                <Container>
                    <div className="motto text-center">
                        <h2 className="title">Contact Us</h2>
                    </div>
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="4">
                                <Card style={{ backgroundColor: "rgba(52, 52, 52, 0.5)" }}>
                                    <div className="social-line " style={{ color: "whitesmoke" }}>
                                        <Card className="card-plain" style={{ color: "whitesmoke" }}>
                                            <p className="card-description">
                                                <Col>
                                                    <i className="nc-icon nc-email-85" />
                                                    <span style={{ paddingLeft: '20px' }} />
                                                    sumedh.378@gmail.com
                                                </Col>
                                            </p>
                                            <p className="card-description">
                                                <Col>
                                                    <i className="nc-icon nc-mobile" />
                                                    <span style={{ paddingLeft: '20px' }} />
                                                    +91 8999335734
                                                </Col>
                                            </p>
                                            <p className="card-description ">
                                                <Col>
                                                    <i className="nc-icon nc-pin-3" />
                                                    <span style={{ paddingLeft: '20px' }} />
                                                    259, E-Hostel, NITC, Kerala
                                                </Col>
                                            </p>
                                            <p className="card-description ">
                                                <Col>
                                                    <SocialIcon style={{ height: 20, width: 20 }} bgColor="white" url="https://www.linkedin.com/in/sumedh-kambale-647661190/" />
                                                    <span style={{ paddingLeft: '20px' }} />
                                                    sumedh-kambale-647661190
                                                </Col>
                                            </p>
                                            <p className="card-description ">
                                                <Col>
                                                    <SocialIcon style={{ height: 20, width: 20 }} bgColor="white" url="https://twitter.com/jaketrent" />
                                                    <span style={{ paddingLeft: '20px' }} />
                                                    E-Hostel, NITC, Kerala
                                                </Col>
                                            </p>
                                        </Card>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </Container>
            </div>

        </>
    );
}

export default Contact;
