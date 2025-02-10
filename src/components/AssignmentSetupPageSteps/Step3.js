import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Step3 = () => (
    <Container>
        <Row>
            <Col md={6}>
                <h3>Camera Setup</h3>
                <hr />
                <p>
                    We use camera images to ensure fairness for everyone. Make sure that you are in front of your camera.
                </p>
            </Col>
            <Col md={6}>
                <Card style={{ width: "100%", background: "#bedbf4", border: "1px solid #5f92ee" }}>
                    <Card.Body>
                        <p>Learn how to navigate your assessment:</p>
                        <ol>
                            <li>we recommend <b>completing the assessment in one go</b> but you can <b>pause or take breaks between tests</b> if needed</li>
                            <li>The <b>assessment is timed.</b> The timer is shown per test and/or per question</li>
                            <li>You can use pen, paper, and calulator during the assessment but avoid using AI and other tools</li>
                        </ol>
                    </Card.Body>
                </Card>

                <Card className="mt-4" style={{ width: "100%", background: "#bedbf4", border: "1px solid #5f92ee" }}>
                    <Card.Body>
                        <p>Learn how to navigate your assessment:</p>
                        <ol>
                            <li>we recommend <b>completing the assessment in one go</b> but you can <b>pause or take breaks between tests</b> if needed</li>
                            <li>The <b>assessment is timed.</b> The timer is shown per test and/or per question</li>
                            <li>You can use pen, paper, and calulator during the assessment but avoid using AI and other tools</li>
                        </ol>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Step3;
