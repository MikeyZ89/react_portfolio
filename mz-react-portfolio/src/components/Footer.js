  
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mzlogo from '/Users/mz/code/homework/react_portfolio/mz-react-portfolio/src/assets/images/mzlogo.png';

function Footer() {

    return( 
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-middle">
                    <Col className="center pt-3">
                        <h6><img src={mzlogo} alt="MZ Logo" height="30px" width="40px"/> All Rights Reserved 2020</h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;