import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const QuizCompleted = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        setLoading(true);
        setTimeout(() => {
            navigate("/");
        }, 1000); // Show loading for 1 second before redirecting
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: "100%", background: "#fff", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <Card.Body>
                    <Container>
                        <h3>Great job! You have completed your assessment</h3>
                        <hr />
                        <p>
                            We would love if you could spare a minute to tell us a bit more about yourself and share some
                            feedback - it's totally optional but incredibly valuable to us.
                        </p>
                        <Button className="mt-3 theme-button" onClick={handleNext}>
                            Next
                        </Button>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default QuizCompleted;
