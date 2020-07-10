import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rainbow from '/Users/mz/code/homework/react_portfolio/project_3/src/assets/images/rainbowPaint.jpg';

function Content(props) {

    return(
        <Container fluid={true} styles={{ backgroundImage:`url(${rainbow})` }}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;