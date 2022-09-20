import React, { useState } from 'react'

import {
    Button,
    Container,
    // Row,
    // Col
} from "reactstrap";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import samplePdf from './../../assets/pdfs/Pranit.pdf'
// import pd from './../../assets/pdfs/IMG.jpg'
// import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

function Temp() {



    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );
    return (
        <div>
            <div >
                <Container>
                    <br />
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                            <Document file={samplePdf} onLoadSuccess={onDocumentLoadSuccess} >
                                <Page height={500} pageNumber={pageNumber} />
                            </Document>
                        </div>
                    </div>
                    <nav className="nav-tabs-navigation">
                        <Button onClick={goToPrevPage}>Prev</Button>
                        {" "}
                        <Button onClick={goToNextPage}>Next</Button>
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    </nav>
                </Container>
            </div>
        </div>

    )
}

export default Temp