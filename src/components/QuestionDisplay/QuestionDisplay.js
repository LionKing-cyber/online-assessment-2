import React, { useState, useEffect, useRef } from "react";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import { FaExclamationTriangle } from 'react-icons/fa';
import parse from "html-react-parser";

const QuestionDisplay = ({ mode, question, onNext }) => {
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [cameraAccessible, setCameraAccessible] = useState(false);
    const [recording, setRecording] = useState(false);
    const [answer, setAnswer] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((userStream) => {
                if (videoRef.current) videoRef.current.srcObject = userStream;
                setCameraAccessible(true);
            })
            .catch(() => setErrorMsg("Camera access error."));
    }, []);

    const handleChange = (e) => {
        const { value, checked, type } = e.target;
        if (type === 'checkbox') {
            setAnswer((prev) => checked ? [...prev, value] : prev.filter(item => item !== value));
        } else {
            setAnswer(value);
        }
    };

    const startRecording = () => {
        if (videoRef.current?.srcObject) {
            mediaRecorderRef.current = new MediaRecorder(videoRef.current.srcObject);
            mediaRecorderRef.current.start();
            setRecording(true);
        }
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setRecording(false);
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h4>{question.question}</h4>
                    <p>{parse(question.description)}</p>
                </Col>
                <Col md={6}>
                    {question.type === "text" && (
                        <Form.Control type="text" placeholder="Enter your answer" value={answer} onChange={handleChange} />
                    )}
                    {question.type === "mcq" && (
                        <Form>
                            {question.options?.map((option, index) => (
                                <label key={index} className={`radio-btn ${answer === option ? "checked" : ""} mb-2`}>
                                    <input type="radio" value={option} checked={answer === option} onChange={handleChange} />
                                    <span className="radio-icon"></span>
                                    {option}
                                </label>
                            ))}
                        </Form>
                    )}
                    {question.type === "multiple" && (
                        <Form>
                            {question.options?.map((option, index) => (
                                <label key={index} className={`checkbox-btn ${answer.includes(option) ? "checked" : ""} mb-2`}>
                                    <input type="checkbox" value={option} checked={answer.includes(option)} onChange={handleChange} />
                                    <span className="checkbox-icon"></span>
                                    {option}
                                </label>
                            ))}
                        </Form>
                    )}
                    {question.type === "video" && (
                        cameraAccessible ? (
                            <>
                                <video ref={videoRef} width="100%" autoPlay muted></video>
                                <div className="mt-2">
                                    <Button className="theme-button" onClick={startRecording} disabled={recording}>Start Recording</Button>
                                    <Button className="theme-button ms-2" onClick={stopRecording} disabled={!recording}>Stop Recording</Button>
                                </div>
                            </>
                        ) : (
                            <Card style={{ background: "#f4dabe" }}>
                                <Card.Body>
                                    <FaExclamationTriangle />
                                    <p>{errorMsg || "Requesting camera permissions..."}</p>
                                </Card.Body>
                            </Card>
                        )
                    )}
                </Col>
            </Row>
            <Button className="mt-3 theme-button" onClick={onNext}>Next</Button>
        </Container>
    );
};

export default QuestionDisplay;
