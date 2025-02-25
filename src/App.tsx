import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from "./pages/welcome-page";
import LoginPage from "./pages/login-page";
import ClientOrders from "./pages/client/client-orders";
import CourierOrders from "./pages/courier/courier-orders";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
      <Router>
          <div className="app-container">
              <Header/>
              <main>
                  <Routes>
                      {/* Customer Pages */}
                      <Route path="/" element={<WelcomePage/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                      <Route path="/home/client" element={<ClientOrders/>}/>
                      <Route path="/home/courier" element={<CourierOrders/>}/>
                  </Routes>
              </main>
              <Footer />
          </div>
      </Router>
);
}

export default App;
