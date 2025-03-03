import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from "./pages/welcome-page";
import LoginPage from "./pages/login-page";
import ClientOrders from "./pages/client/client-orders";
import CourierOrders from "./pages/courier/courier-orders";
import Footer from "./components/footer/footer";
import Header from "./components/header";
import ClientRestaurantsPage from "./pages/client/client-restaurants";
import RestaurantDishesPage from "./pages/client/client-restaurant-dishes";
import ClientCartPage from "./pages/client/client-cart";
import { ClientProfile } from './pages/client/client-profile/client-profile';

function App() {
  return (
    <Router>
      <Header />
      <main className='main-container'>
        <Routes>
          {/* Customer Pages */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home/client" element={<ClientOrders />} />
          <Route path="/home/courier" element={<CourierOrders />} />
          <Route path="/client/orders" element={<CourierOrders />} />
          <Route path="/client/restraunt" element={<ClientRestaurantsPage />} />
          <Route path="/client/profile" element={<ClientProfile />} />
          <Route path="/client/cart" element={<ClientCartPage />} />
          <Route path="/client/restaurant/:restaurantName/dishes" element={<RestaurantDishesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;