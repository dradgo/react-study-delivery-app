import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from "./pages/welcome-page";
import LoginPage from "./pages/login-page";

function App() {
  return (
      <Router>
        <Routes>
          {/* Customer Pages */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
  );
}

export default App;
