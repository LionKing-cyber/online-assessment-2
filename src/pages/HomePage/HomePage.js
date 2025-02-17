import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './HomePage.css'

function HomePage() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center row-reverse-mobile">
        <Col md={8} className="px-3">
          <div className="p-4 bg-white shadow rounded">
            <h2 className="fw-bold mb-4">Lead Business Development at redhand</h2>
            <p>
              Thank you for your interest in the <strong>Lead Business Development</strong> position at <strong>redhand</strong>. We’re excited to invite you to demonstrate
              your skills through a TestGorilla assessment. This is your opportunity to shine
              and showcase your abilities beyond what’s on your resume.
            </p>
            <p><strong>Duration:</strong> 14 mins maximum</p>
            <hr />
            <h4 className="mt-4 mb-4 fw-bold">Steps to get started</h4>
            <div className="p-3 bg-light-pink rounded">
              <ol className="list-unstyled d-flex justify-content-between px-3">
                <li className="text-center">
                  <strong className="count bg-pink">1</strong>
                  <h4>Register your email</h4>
                  <span>Get assessment details</span>
                </li>
                <li className="text-center">
                  <strong className="count bg-pink">2</strong>
                  <h4>Setup your device</h4>
                  <span>Test audio and video</span>
                </li>
                <li className="text-center">
                  <strong className="count bg-pink">1</strong>
                  <h4>Start the assessment</h4>
                  <span>Show your skills</span>
                </li>
              </ol>
            </div>

            <h4 className="mt-4 mb-4 fw-bold">Why take a skills assessment?</h4>
            <div className="p-3 rounded">
              <ol className="list-unstyled d-flex justify-content-between px-3">
                <li className="text-center">
                  <strong className="count bg-pink">1</strong>
                  <h4>Discover your strength</h4>
                  <span>Uncover your potential and skills</span>
                </li>
                <li className="text-center">
                  <strong className="count bg-pink">2</strong>
                  <h4>Stand out</h4>
                  <span>Showcase your skills to employers</span>
                </li>
                <li className="text-center">
                  <strong className="count bg-pink">1</strong>
                  <h4>Career acceleration</h4>
                  <span>Get hired faster with skills-based hiring</span>
                </li>
              </ol>
            </div>

            <hr />
            <h4 className="mt-4 mb-4 fw-bold">Learn more about TestGorilla</h4>
            <p>
              Thank you for your interest in the <strong>Lead Business Development</strong> position at <strong>redhand</strong>. We’re excited to invite you to demonstrate
              your skills through a TestGorilla assessment. This is your opportunity to shine
              and showcase your abilities beyond what’s on your resume.
            </p>
            <p>
              Learn more about skills-based hiring and TestGorilla at how <a href="#">skills-based hiring works</a>
            </p>

            <div className="p-3 rounded bg-light-pink">
              <ol className="list-unstyled d-flex justify-content-between px-3">
                <li className="text-center px-1">
                  <strong className="stat text-pink">4.6M</strong>
                  <span>Candidate accessed for 89K+ roles globally</span>
                </li>
                <li className="text-center px-1">
                  <strong className="stat text-pink">230K</strong>
                  <span>dream jobs secured. That's 1 in 20 applicants hired</span>
                </li>
                <li className="text-center px-1">
                  <strong className="stat text-pink">900+</strong>
                  <span>5-star reviews from accessed job seekers</span>
                </li>
              </ol>
            </div>

          </div>
        </Col>

        <Col md={4} className="px-3">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-center mb-5">redhand</h3>
            <Form>
              <Form.Floating className="mb-3">
                <Form.Control type="text" placeholder="First Name" id="firstName" />
                <Form.Label htmlFor="firstName">First Name</Form.Label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control type="text" placeholder="Last Name" id="lastName" />
                <Form.Label htmlFor="lastName">Last Name</Form.Label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control type="text" placeholder="Email" id="email" />
                <Form.Label htmlFor="email">Email</Form.Label>
              </Form.Floating>
              <Form.Check type="checkbox" label="I have read and accepted the privacy policy and terms." />
              <Form.Check type="checkbox" label="I agree to receive marketing emails." className="mb-3" />
              <Button href="/assignment-steps" variant="primary" className="w-100 theme-button">Let's go</Button>
            </Form>
            <p className="text-center mt-3">10,000+ companies hire with TestGorilla</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
