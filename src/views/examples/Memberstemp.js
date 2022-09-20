
import React,{useState} from "react";

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
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pranitPdf from './../../assets/pdfs/Pranit-Resume.pdf'
import princePdf from './../../assets/pdfs/Prince-Resume.pdf'
import jituPdf from './../../assets/pdfs/Jitu-Resume.pdf'
import sumedhPdf from './../../assets/pdfs/Sumedh-Resume.pdf'

function Memberstemp() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });

    const [pdf,setpdf] = useState(pranitPdf);

    return (
        <>
            <div className="main" id="members">
                <div className="section section-dark text-center">
                    <Container>
                        <h2 className="title">Members</h2>
                        <Row>
                        <Col>
                            <Row >
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        {/* <a  href="" onClick={(e) => e.preventDefault()}> */}
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/Jitu-Profile.jpeg")}
                                            />
                                        {/* </a> */}
                                    </div>
                                    <CardBody>
                                        {/* <a href="" onClick={(e) => e.preventDefault()}> */}
                                            <div className="author">
                                                <CardTitle tag="h4">Jitu Banot</CardTitle>
                                                <h6 className="card-category">B190576CS</h6>
                                            </div>
                                        {/* </a> */}
                                        <p className="card-description text-center">
                                            jitu_b190576cs@nitc.ac.in   
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button onClick={(e)=>{setpdf(jituPdf)}}
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            CV
                                        </Button>
                                        <Button href="https://drive.google.com/file/d/185e5GVMGG_8-ZtZdubrRlT12gEefq7oA/view?usp=drivesdk"
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            Get
                                        </Button>
                                    </CardFooter>
                                </Card>
                                
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        {/* <a href="" onClick={(e) => e.preventDefault()}> */}
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/Pranit-Profile.jpg")}
                                            />
                                        {/* </a> */}
                                    </div>
                                    <CardBody>
                                        {/* <a href="" onClick={(e) => e.preventDefault()}> */}
                                            <div className="author">
                                                <CardTitle tag="h4">Pranit Deshmukh</CardTitle>
                                                <h6 className="card-category">B190553CS</h6>
                                            </div>
                                        {/* </a> */}
                                        <p className="card-description text-center">
                                            pranit_b190553cs@nitc.ac.in
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                    <Button onClick={(e)=>{setpdf(pranitPdf)}}
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            CV
                                        </Button>
                                        <Button href="https://drive.google.com/file/d/1j1akWFqIO0GAadFvLcI4tgM9dkOQm5FX/view"
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            Get
                                        </Button>
                                    </CardFooter>
                                    
                                </Card>
                            </Row>
                            <Row >
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        {/* <a href="" onClick={(e) => e.preventDefault()}> */}
                                            <img
                                                alt="..."
                                                src={require("assets/img/faces/Prince-Profile.jpeg")}
                                            />
                                        {/* </a> */}
                                    </div>
                                    <CardBody>
                                        {/* <a href="" onClick={(e) => e.preventDefault()}> */}
                                            <div className="author">
                                                <CardTitle tag="h4">Prince Chauhan</CardTitle>
                                                <h6 className="card-category">B190492CS</h6>
                                            </div>
                                        {/* </a> */}
                                        <p className="card-description text-center">
                                            prince_b190492cs@nitc.ac.in
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                    <Button onClick={(e)=>{setpdf(princePdf)}}
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            CV
                                        </Button>
                                        <Button href="https://drive.google.com/file/d/1TseFY9mOsN7RBQI9QDq5WEJZusr1w5IA/view?usp=drivesdk"
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            Get
                                        </Button>
                                    </CardFooter>
                                </Card>
                            
                                <Card className="card-profile card-plain">
                                    <div className="card-avatar">
                                        {/* <a href="" onClick={(e) => e.preventDefault()}> */}
                                            <img

                                                alt="..."
                                                src={require("assets/img/faces/Sumedh-Profile.jpeg")}
                                            />
                                        {/* </a> */}
                                    </div>
                                    <CardBody>
                                        {/* <a href="" onClick={(e) => e.preventDefault()}> */}
                                            <div className="author">
                                                <CardTitle tag="h4">Sumedh Kambale</CardTitle>
                                                <h6 className="card-category">B190450CS</h6>
                                            </div>
                                        {/* </a> */}
                                        <p className="card-description text-center">
                                            sumedh_b190450cs@nitc.ac.in
                                        </p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                    <Button onClick={(e)=>{setpdf(sumedhPdf)}}
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            CV
                                        </Button>
                                        <Button href="https://drive.google.com/file/d/12cr30v1bRpxTT4N4YNiSFx1bA6JrKC7f/view?usp=sharing"
                                            target="_blank" className="btn-round" color="neutral" type="button" outline>
                                            Get
                                        </Button>

                                    </CardFooter>
                                </Card>
                            </Row>
                        </Col>
                        <Col>
                        <Document file={pdf}>
                                <Page pageNumber={1} />
                            </Document>
                        </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Memberstemp;
