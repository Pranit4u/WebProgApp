import React from 'react'
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import samplePdf from './../../assets/pdfs/Sumedh-Resume.pdf'
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

function SumedhResume() {

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    });
    return (
        <div>
            <ProfilePageHeader />
            <div className="section profile-content">
                <Container>
                    <div className="owner">
                        <div className="avatar">
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/Sumedh-Profile.jpeg")}
                            />
                        </div>
                        <div className="name">
                            <h4 className="title">
                                Sumedh Kambale <br />
                            </h4>
                        </div>
                    </div>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="6">
                            <Button href="https://drive.google.com/file/d/12cr30v1bRpxTT4N4YNiSFx1bA6JrKC7f/view?usp=sharing" className="btn-round" color="default" outline>
                                Download CV
                            </Button>
                        </Col>
                    </Row>
                    <br />
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                            <Document file={samplePdf}>
                                <Page pageNumber={1} />
                            </Document>
                        </div>
                    </div>
                </Container>
            </div>
        </div>

    )
}

export default SumedhResume