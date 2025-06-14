import React, { JSX } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome-page';
import LoginPage from './pages/login-page';
import ClientOrders from './pages/client/client-orders';
import CourierOrders from './pages/courier/courier-orders';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ClientRestaurantsPage from './pages/client/client-restaurants';
import RestaurantDishesPage from './pages/client/client-restaurant-dishes';
import ClientCartPage from './pages/client/client-cart/client-cart';
import { ClientProfile } from './pages/client/client-profile/client-profile';
import { INTERNAL_ROUTES } from './constants/links';
import { UserProvider } from './context/user-context';
import MenuManagement from './pages/restaurant/menu-management/menu-management';
import Dashboard from './pages/restaurant/dashboard/dashboard';

import './App.scss';
import RestaurantOrdersPage from './pages/restaurant/restaurant-orders';
import AdminOrdersPage from './pages/admin/admin-orders';
import CourierProfilePage from './pages/courier/profile/profile';
import AdminDashboard from './pages/admin/admin-dashboard';
import Restaurants from './pages/admin/restaurants/restaurants';
import { Users } from './pages/admin/users/users';
import DeliverySettings from './pages/restaurant/delivery-settings/delivery-settings';
import ClientOrderDetail from 'src/pages/client/client-order-detail';

function App(): JSX.Element {
    return (
        <Router>
            <UserProvider>
                <Header />
                <main className="main-container">
                    <Routes>
                        <Route path={INTERNAL_ROUTES.general} element={<WelcomePage />} />
                        <Route path={INTERNAL_ROUTES.login} element={<LoginPage />} />
                        <Route path={INTERNAL_ROUTES.clientOrders} element={<ClientOrders />} />
                        <Route
                            path={INTERNAL_ROUTES.clientOrderDetail}
                            element={<ClientOrderDetail />}
                        />
                        <Route path={INTERNAL_ROUTES.courierOrders} element={<CourierOrders />} />
                        <Route
                            path={INTERNAL_ROUTES.courierProfile}
                            element={<CourierProfilePage />}
                        />
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
                            element={<MenuManagement />}
                        />
                        <Route
                            path={`${INTERNAL_ROUTES.restaurantOrders}`}
                            element={<RestaurantOrdersPage />}
                        />
                        <Route
                            path={`${INTERNAL_ROUTES.adminOrders}`}
                            element={<AdminOrdersPage />}
                        />
                        <Route
                            path={`${INTERNAL_ROUTES.adminDashboard}`}
                            element={<AdminDashboard />}
                        />
                        <Route
                            path={`${INTERNAL_ROUTES.adminRestaurants}`}
                            element={<Restaurants />}
                        />
                        <Route path={`${INTERNAL_ROUTES.adminUsers}`} element={<Users />} />
                        <Route
                            path={`${INTERNAL_ROUTES.restProfile}`}
                            element={<DeliverySettings />}
                        />
                    </Routes>
                </main>
                <Footer />
            </UserProvider>
        </Router>
    );
}

export default App;
