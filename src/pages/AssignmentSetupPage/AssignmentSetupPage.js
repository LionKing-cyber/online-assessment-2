import React, { useState } from "react";
import styles from './AssignmentSetupPage.css';
import { FaChevronRight } from "react-icons/fa";
import { Container, Card, Button } from "react-bootstrap";
import Step1 from "../../components/AssignmentSetupPageSteps/Step1";
import Step2 from "../../components/AssignmentSetupPageSteps/Step2";
import Step3 from "../../components/AssignmentSetupPageSteps/Step3";

const AssignmentSetupPage = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: "100%", background: "#fff", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <Card.Body>
                    {step === 1 && <Step1 />}
                    {step === 2 && <Step2 />}
                    {step === 3 && <Step3 />}

                    {/* Button Container Logic */}
                    <div className={`d-flex mt-4 ${step === 1 ? "justify-content-end" : "justify-content-between"}`}>
                        {step > 1 && <Button variant="secondary" onClick={prevStep}>Back</Button>}
                        {step < 3 && <Button className="theme-button d-flex align-items-center px-4" variant="primary" onClick={nextStep}>
                            Continue<FaChevronRight className="ms-2" style={{ fontSize: "0.8rem" }} />
                        </Button>}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AssignmentSetupPage;
