import React, { useState } from "react";
import './AssignmentSetupPage.css';
import { FaChevronRight } from "react-icons/fa";
import { Container, Card, Button } from "react-bootstrap";
import Step1 from "../../components/AssignmentSetupPageSteps/Step1";
import Step2 from "../../components/AssignmentSetupPageSteps/Step2";
import Step3 from "../../components/AssignmentSetupPageSteps/Step3";
import Step4 from "../../components/AssignmentSetupPageSteps/Step4";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const AssignmentSetupPage = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleNavigation = (direction) => {
        setLoading(true);
        setTimeout(() => {
            if (direction === "next") {
                setStep((prev) => Math.min(prev + 1, 4));
            } else if (direction === "back") {
                setStep((prev) => Math.max(prev - 1, 1));
            }
            setLoading(false);
        }, 1000); // Show loading for 1 second
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: "100%", background: "#fff", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <Card.Body>
                    {step === 1 && <Step1 />}
                    {step === 2 && <Step2 />}
                    {step === 3 && <Step3 />}
                    {step === 4 && <Step4 testType="Practice Solving" />}

                    {/* Button Container Logic */}
                    <div className={`d-flex mt-4 ${step === 1 ? "justify-content-end" : "justify-content-between"}`}>
                        {step > 1 && step !== 4 && (
                            <Button
                                className="theme-button"
                                variant="secondary"
                                onClick={() => handleNavigation("back")}
                            >
                                Back
                            </Button>
                        )}
                        {step <= 3 && (
                            <Button
                                className="theme-button d-flex align-items-center px-4"
                                variant="primary"
                                onClick={() => handleNavigation("next")}
                            >
                                Continue <FaChevronRight className="ms-2" style={{ fontSize: "0.8rem" }} />
                            </Button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AssignmentSetupPage;
