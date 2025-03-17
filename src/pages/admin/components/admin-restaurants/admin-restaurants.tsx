import React from 'react';
import { Restaurant } from '../../types';

type Props = {
    restaurants: Restaurant[];
};

export const AdminRestaurants: React.FC<Props> = ({ restaurants }) => {
    return (
        <div className="admin-dashboard__restaurants">
            <h2 className="admin-dashboard__title">Рестораны</h2>
            <div className="admin-dashboard__restaurants-list">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="admin-dashboard__restaurant-card">
                        <div className="admin-dashboard__restaurant-card-header">
                            <h3>{restaurant.name}</h3>
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <span>{restaurant.rating.toFixed(1)}</span>
                            </div>
                        </div>
                        <div className="admin-dashboard__restaurant-card-stats">
                            <div className="admin-dashboard__restaurant-card-stat">
                                <h4>Всего заказов</h4>
                                <p>{restaurant.totalOrders}</p>
                            </div>
                            <div className="admin-dashboard__restaurant-card-stat completed">
                                <h4>Выполнено</h4>
                                <p>{restaurant.completedOrders}</p>
                            </div>
                            <div className="admin-dashboard__restaurant-card-stat cancelled">
                                <h4>Отменено</h4>
                                <p>{restaurant.cancelledOrders}</p>
                            </div>
                            <div className="admin-dashboard__restaurant-card-stat pending">
                                <h4>В обработке</h4>
                                <p>{restaurant.pendingOrders}</p>
                            </div>
                            <div className="admin-dashboard__restaurant-card-stat revenue">
                                <h4>Выручка</h4>
                                <p>{restaurant.revenue.toLocaleString()} ₽</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
