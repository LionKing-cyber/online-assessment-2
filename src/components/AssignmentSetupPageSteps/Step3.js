import React, { useState, useEffect, useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaExclamationTriangle } from 'react-icons/fa';

const Step3 = () => {
    const videoRef = useRef(null);
    const [cameraAccessible, setCameraAccessible] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [stream, setStream] = useState(null);

    useEffect(() => {
        const requestCameraPermissions = async () => {
            try {
                const userStream = await navigator.mediaDevices.getUserMedia({ video: true });
                setStream(userStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = userStream;
                }
                setCameraAccessible(true);
                setErrorMsg("");
            } catch (error) {
                handleCameraError(error);
            }
        };
        requestCameraPermissions();
    }, []);

    const handleCameraError = (error) => {
        const errorMessages = {
            NotAllowedError: "Camera access denied. Please enable permissions in your browser settings.",
            NotFoundError: "No camera detected. Connect a camera and reload.",
            NotReadableError: "Camera is in use by another application.",
        };
        setErrorMsg(errorMessages[error.name] || "Camera access error.");
        setCameraAccessible(false);
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h3>Camera Setup</h3>
                    <hr />

                </Col>
                <Col md={6}>

                    {cameraAccessible && stream ? (
                        <video ref={videoRef} width="100%" autoPlay muted></video>
                    ) : errorMsg ? (
                        <Card style={{ background: "#f4dabe", border: "1px solid #eebb5f" }}>
                            <Card.Body className="d-flex align-items-center gap-4">
                                <FaExclamationTriangle style={{ fontSize: "1.3rem" }} />
                                <p>{errorMsg}</p>
                            </Card.Body>
                        </Card>
                    ) : (
                        <p>Requesting camera permissions...</p>
                    )}

                    <Card className="mt-3" style={{ background: "#bedbf4", border: "1px solid #5f92ee" }}>
                        <Card.Body>
                            <h3>Webcam Troubleshooting</h3>
                            <p>
                                - Verify browser camera permissions.<br />
                                - Use a <a href="#">supported browser</a>.<br />
                                - Ensure the correct camera is selected.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Step3;
