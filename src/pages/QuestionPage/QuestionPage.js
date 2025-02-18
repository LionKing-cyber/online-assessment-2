import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import QuestionDisplay from "../../components/QuestionDisplay/QuestionDisplay";
import Step4 from "../../components/AssignmentSetupPageSteps/Step4";
import { useNavigate } from "react-router-dom";
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'

const practiceQuestions = [
    { id: 1, question: "Practice Question 1?", description: "<b>strong text</b><br/>New line", type: "mcq", options: ["A", "B", "C", "D"] },
    { id: 2, question: "Practice Question 2?", description: "<b>strong text</b><br/>New line", type: "text" },
    { id: 3, question: "Practice Question 3?", description: "<b>strong text</b><br/>New line", type: "multiple", options: ["choice one", "Choice two", "choice three"] },
];

const realQuestions = [
    { id: 1, question: "Question", description: "<b>strong text</b><br/>New line", type: "video" },
];

const QuestionPage = () => {
    const [mode, setMode] = useState("practice"); // "practice" or "real"
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [step4, setStep4] = useState(false);
    const navigate = useNavigate();

    const questions = mode === "practice" ? practiceQuestions : realQuestions;

    const showLoading = (callback) => {
        setLoading(true);
        setTimeout(() => {
            callback();
            setLoading(false);
        }, 1000); // Show loading for 1 second
    };

    const handleNextQuestion = () => {
        showLoading(() => {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                if (mode === "real") {
                    navigate('/feedback');
                } else {
                    setStep4(true);
                }
            }
        });
    };

    const handleBackQuestion = () => {
        if (currentIndex > 0) {
            showLoading(() => {
                setCurrentIndex(currentIndex - 1);
            });
        }
    };

    const handleTimerComplete = () => {
        console.log("Timer finished! Switching to real questions.");
        setMode("real");
        setCurrentIndex(0);
        setStep4(false);
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: "100%", background: "#fff", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <Card.Body>
                    {!step4 ? (
                        <QuestionDisplay
                            mode={mode}
                            question={questions[currentIndex]}
                            onNext={handleNextQuestion}
                            onBack={handleBackQuestion}
                            showBackButton={currentIndex > 0}
                        />
                    ) : (
                        <Step4 testType="Video Interview" onTimerComplete={handleTimerComplete} />
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default QuestionPage;
