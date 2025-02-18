import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import TopMenu from './components/TopMenu/TopMenu';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import QuizCompleted from './pages/QuizCompleted/QuizCompleted';

// Lazy-loaded pages
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const AssignmentSetupPage = React.lazy(() => import('./pages/AssignmentSetupPage/AssignmentSetupPage'));
const QuestionPage = React.lazy(() => import('./pages/QuestionPage/QuestionPage'));
const FeedbackPage = React.lazy(() => import('./pages/FeedbackPage/FeedbackPage'));

function App() {
  return (
    <Router>
      <TopMenu />
      <Container>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assignment-steps" element={<AssignmentSetupPage />} />
            <Route path="/practice-test" element={<QuestionPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/completed" element={<QuizCompleted />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
