import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Step2 = () => {
    const [fluency, setFluency] = useState("yes");
    const [disability, setDisability] = useState("yes");

    return (
        <Container>
            <h3>Assessment setup</h3>
            <hr />
            <p>
                To make sure that everyone is fairly treated, we might need to adjust youe assessment setup.
                You can help us do that by answering the following questions:
                <br />
            </p>

            <Form>
                <Form.Group>
                    <Form.Label>Are you fluent in English?</Form.Label>
                    <div className="radio-group">
                        <label className={`radio-btn ${fluency === "yes" ? "checked" : ""}`}>
                            <input
                                checked={fluency === "yes"}
                                type="radio"
                                name="fluent"
                                value="yes"
                                onChange={() => setFluency("yes")}
                            />
                            <span className="radio-icon"></span>
                            Yes, I am fluent
                        </label>

                        <label className={`radio-btn ${fluency === "no" ? "checked" : ""}`}>
                            <input
                                checked={fluency === "no"}
                                type="radio"
                                name="fluent"
                                value="no"
                                onChange={() => setFluency("no")}
                            />
                            <span className="radio-icon"></span>
                            No, I am not fluent
                        </label>
                    </div>
                </Form.Group>
            </Form>

            <p>
                Persons with disabilities or conditions that affect memory or concentration abilities, such as ADHD,
                dyslexia or autism, may require assessment change(s) in order to proceed. Do you require additional
                support to complete our online assessment?
                <br />
            </p>

            <Form>
                <Form.Group>
                    <Form.Label>If you don't consider your condition to be a hindrance when taking a test, you can answer "No" to
                        proceed to the assessment.</Form.Label>
                    <div className="radio-group">
                        <label className={`radio-btn ${disability === "yes" ? "checked" : ""}`}>
                            <input
                                checked={disability === "yes"}
                                type="radio"
                                name="disability"
                                value="yes"
                                onChange={() => setDisability("yes")}
                            />
                            <span className="radio-icon"></span>
                            Yes, I do.
                        </label>

                        <label className={`radio-btn ${disability === "no" ? "checked" : ""}`}>
                            <input
                                checked={disability === "no"}
                                type="radio"
                                name="disability"
                                value="no"
                                onChange={() => setDisability("no")}
                            />
                            <span className="radio-icon"></span>
                            No, I don't
                        </label>
                    </div>
                </Form.Group>
            </Form>

            <Form.Check type="checkbox" label="Let the employer know about my condition (optional)" />

            <hr />
        </Container>
    )
};

export default Step2;
