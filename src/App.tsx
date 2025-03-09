import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome-page';
import LoginPage from './pages/login-page';
import ClientOrders from './pages/client/client-orders';
import CourierOrders from './pages/courier/courier-orders';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ClientRestaurantsPage from './pages/client/client-restaurants';
import RestaurantDishesPage from './pages/client/client-restaurant-dishes';
import ClientCartPage from './pages/client/client-cart';
import { ClientProfile } from './pages/client/client-profile/client-profile';
import { INTERNAL_ROUTES } from './constants/links';
import { UserProvider } from './context/user-context';
import MenuManagement from './pages/restaurant/menu-management/menu-management';
import Dashboard from './pages/restaurant/dashboard/dashboard';

import './App.scss';
import RestaurantOrdersPage from "./pages/restaurant/restaurant-orders";
import AdminOrdersPage from "./pages/admin/admin-orders";

function App() {
    return (
        <Router>
            <UserProvider>
                <Header />
                <main className="main-container">
                    <Routes>
                        {/* Customer Pages */}
                        <Route path={INTERNAL_ROUTES.general} element={<WelcomePage />} />
                        <Route path={INTERNAL_ROUTES.login} element={<LoginPage />} />
                        <Route path={INTERNAL_ROUTES.clientOrders} element={<ClientOrders />} />
                        <Route path={INTERNAL_ROUTES.courierOrders} element={<CourierOrders />} />
                        <Route path={INTERNAL_ROUTES.clientOrders} element={<CourierOrders />} />
                        <Route
                            path={INTERNAL_ROUTES.clientRestaurant}
                            element={<ClientRestaurantsPage />}
                        />
                        <Route path={INTERNAL_ROUTES.clientProfile} element={<ClientProfile />} />
                        <Route path={INTERNAL_ROUTES.clientCart} element={<ClientCartPage />} />
                        <Route
                            path={`${INTERNAL_ROUTES.restaurantDishes}`}
                            element={<RestaurantDishesPage />}
                        />
                        <Route path={`${INTERNAL_ROUTES.dashboard}`} element={<Dashboard />} />
                        <Route
                            path={`${INTERNAL_ROUTES.restaurantManage}`}
                            element={<MenuManagement />} />
                        <Route path={`${INTERNAL_ROUTES.restaurantOrders}`} element={<RestaurantOrdersPage />} />
                        <Route path={`${INTERNAL_ROUTES.adminOrders}`} element={<AdminOrdersPage/>} />
                    </Routes>
                </main>
                <Footer />
            </UserProvider>
        </Router>
    );
}

export default App;
