import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from "./pages/welcome-page";
import LoginPage from "./pages/login-page";
import ClientOrders from "./pages/client/client-orders";
import CourierOrders from "./pages/courier/courier-orders";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ClientRestaurantsPage from "./pages/client/client-restaurants";
import RestaurantDishesPage from "./pages/client/client-restaurant-dishes";
import ClientCartPage from "./pages/client/client-cart";
import { ClientProfile } from './pages/client/client-profile/client-profile';
import { INTERNAL_ROUTES } from './constants/links';
import { UserProvider } from "./context/user-context";

import './App.scss';

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <main className='main-container'>
          <Routes>

            {/* Customer Pages */}
            <Route path={INTERNAL_ROUTES.general} element={<WelcomePage />} />
            <Route path={INTERNAL_ROUTES.login} element={<LoginPage />} />
            <Route path={INTERNAL_ROUTES.clientOrders} element={<ClientOrders />} />
            <Route path={INTERNAL_ROUTES.courierOrders} element={<CourierOrders />} />
            <Route path={INTERNAL_ROUTES.clientOrders} element={<CourierOrders />} />
            <Route path={INTERNAL_ROUTES.clientRestaurant} element={<ClientRestaurantsPage />} />
            <Route path={INTERNAL_ROUTES.clientProfile} element={<ClientProfile />} />
            <Route path={INTERNAL_ROUTES.clientCart} element={<ClientCartPage />} />
            <Route path={`${INTERNAL_ROUTES.restaurantDishes}/:restaurantName/dishes`} element={<RestaurantDishesPage />} />
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;