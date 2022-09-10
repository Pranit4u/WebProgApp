
import React from "react";

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col
} from "reactstrap";


function Members() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    return (
        <>
            <div className="main" id="members">
                <div className="section section-dark text-center">
                    <Container>
                        <h2 className="title">Members</h2>
                        <Row>
                            <Col >
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/Jitu-Profile.jpeg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Jitu Banot</CardTitle>
                                                <h6 className="card-category">B190576CS</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            jitu_b190576cs@nitc.ac.in
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button href="/jitu-resume"
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            CV
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col >
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/Pranit-Profile.jpg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Pranit Deshmukh</CardTitle>
                                                <h6 className="card-category">B190553CS</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            pranit_b190553cs@nitc.ac.in
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                    <Button href="/pranit-resume"
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            CV
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col >
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/Prince-Profile.jpeg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Prince Chauhan</CardTitle>
                                                <h6 className="card-category">B190492CS</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            prince_b190492cs@nitc.ac.in
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                    <Button href="/prince-resume"
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            CV
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col >
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        <a onClick={(e) => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/Sumedh-Profile.jpeg")}
                                            />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Sumedh Kambale</CardTitle>
                                                <h6 className="card-category">B190450CS</h6>
                                            </div>
                                        </a>
                                        <p className="card-description text-center">
                                            sumedh_b190450cs@nitc.ac.in
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                    <Button href="/sumedh-resume"
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            CV
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Members;
