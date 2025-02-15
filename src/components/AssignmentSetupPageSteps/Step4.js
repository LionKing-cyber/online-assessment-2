import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Step4 = ({ testType, onTimerComplete }) => {

    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            if (onTimerComplete) {
                onTimerComplete(); // Notify parent that timer is done
            } else {
                navigate("/practice-test");
            }
            
        }
    }, [countdown, navigate, onTimerComplete]);

    return (
        <Container>
            <p>
                This is the next test
            </p>

            <h3>{testType}</h3>
            <span className="tag">You will first see 4 practice questions for this test to get a sense of what to expect. After that you actual test will begin.</span>
            <hr />
            <p>Practice question will start in <b>{countdown} seconds</b></p>
            <p>
                Please stay on this screen. The timer for your next test has started and cannot be paused. The timer continues even when you close the browser.
            </p>

        </Container>
    )
};

export default Step4;
