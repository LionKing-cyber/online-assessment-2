import React from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";

const Step1 = () => (
    <Container>
        <h3>Hello Trevor! Ready to showcase your skills?</h3>
        <p>
            Thank you for applying for this role and welcome to your skills assessment administered by TestGorilla
            <br />
            Completing it will give you a chance to show off your skills and stand out from the crowd! Good Luck!
            <br />
            This assessment includes the following steps:
        </p>

        <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="stepper">
                <div className="step">
                    <div className="outer-circle">
                        <div className="circle">1</div>
                    </div>
                    <h5>Problem solving</h5>
                    <span>12 questions</span>
                    <span>9 minutes</span>
                </div>
                <div className="line"></div>
                <div className="step">
                    <div className="outer-circle">
                        <div className="circle">2</div>
                    </div>
                    <h5>Custom questions</h5>
                    <span>1 questions</span>
                    <span>5 minutes</span>
                </div>
                <div className="line"></div>
                <div className="step">
                    <div className="outer-circle">
                        <div className="circle">3</div>
                    </div>
                    <h5>View results</h5>
                </div>
            </div>
        </div>

        <Row>
            <Col md={6} className="d-flex align-items-stretch mb-3">
                <Card className="w-100 h-100" style={{ width: "100%", background: "#bedbf4", border: "1px solid #5f92ee" }}>
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
            <Col md={6} className="d-flex align-items-stretch mb-3">
                <Card className="w-100 h-100" style={{ width: "100%", background: "#bedbf4", border: "1px solid #5f92ee" }}>
                    <Card.Body>
                        <p>Learn how to navigate your assessment:</p>
                        <ol>
                            <li>Have a <b>camera and a microphone</b> as you may be required to answer the questions in a video format.</li>
                            <li>we recommend <b>completing the assessment in one go</b> but you can <b>pause or take breaks between tests</b> if needed</li>
                            <li>The <b>assessment is timed.</b> The timer is shown per test and/or per question</li>
                            <li>You can use pen, paper, and calulator during the assessment but avoid using AI and other tools</li>
                        </ol>
                    </Card.Body>
                </Card></Col>
            <Col md={6}>
            </Col>
        </Row>
    </Container>
);

export default Step1;
