import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import TopMenu from './components/TopMenu/TopMenu';
import HomePage from './pages/HomePage/HomePage';
import AssignmentSetupPage from './pages/AssignmentSetupPage/AssignmentSetupPage';

function App() {
  return (
    <Router>
      <TopMenu />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assignment-steps" element={<AssignmentSetupPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
