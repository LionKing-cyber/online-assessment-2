import React, { useState } from "react";
import styles from './FeedbackPage.css';
import { Container, Card, Button, ButtonGroup, Form } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FeedbackPage = () => {
    const [rating, setRating] = useState(null);
    const [comments, setComments] = useState('');
    const navigate = useNavigate();
    const nextStep = () => navigate('/');

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: "100%", background: "#fff", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <Card.Body>
                    <Container>
                        <h3>You have finished teh test. We'd like to know what you think about the test you just completed,
                            regardless of how you think you did.
                        </h3>
                        <hr />
                        <p>
                            In your opinion, did the test accurately measure your skills in Problem Solving?
                            <br /><br />
                            Your feedback is anonymous.
                        </p>

                        <hr />
                        <ButtonGroup aria-label="Feedback Rating" className="mb-3 d-flex w-100">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <Button
                                    key={num}
                                    className={`rating-btn ${rating === num ? 'active' : ''}`}
                                    onClick={() => setRating(num)}
                                >
                                    {num}
                                </Button>
                            ))}
                        </ButtonGroup>
                        <hr />

                        <p>What can we do, if anything, to improvet he test? (optional)</p>

                        <Form>
                            <Form.Group controlId="feedbackTextarea" className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Please enter your answer"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                    className="w-100"
                                />
                            </Form.Group>
                        </Form>

                        <div className="d-flex justify-content-end">
                            <Button className="theme-button d-flex align-items-center px-4" variant="primary" onClick={nextStep}>
                                Submit<FaChevronRight className="ms-2" style={{ fontSize: "0.8rem" }} />
                            </Button>
                        </div>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FeedbackPage;
