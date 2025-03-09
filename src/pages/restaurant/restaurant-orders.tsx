import React, { useState } from 'react';
import { OrderStatusType } from 'src/constants/order-status';
import { mockOrders } from 'src/mocks/orders';
import { Order } from 'src/types/types';
import './restraunt-orders.scss';

const RestaurantOrdersPage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>(mockOrders);

    const handleUpdateStatus = (id: number, status: OrderStatusType) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) => (order.id === id ? { ...order, status } : order))
        );
    };

    return (
        <div className="orders-container">
            <h2>Заказы Ресторана</h2>

            <div className="orders-section">
                <h3>Ожидаемые заказы</h3>
                <ul className="orders-list">
                    {orders
                        .filter((order) => order.status === 'pending')
                        .map((order) => (
                            <li key={order.id} className="order-item">
                                <p>
                                    <strong>Клиент:</strong> {order.customerName}
                                </p>
                                <p>
                                    <strong>Заказ:</strong> {order.items.join(', ')}
                                </p>
                                <p>
                                    <strong>Сумма:</strong> {order.totalAmount}
                                </p>
                                <div className="order-actions">
                                    <button
                                        onClick={() => handleUpdateStatus(order.id, 'completed')}
                                    >
                                        Завершить
                                    </button>
                                    <button
                                        onClick={() => handleUpdateStatus(order.id, 'cancelled')}
                                        className="decline-button"
                                    >
                                        Отменить
                                    </button>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>

            <div className="orders-section">
                <h3>Завершенные заказы</h3>
                <ul className="orders-list">
                    {orders
                        .filter((order) => order.status === 'completed')
                        .map((order) => (
                            <li key={order.id} className="order-item completed">
                                <p>
                                    <strong>Customer:</strong> {order.customerName}
                                </p>
                                <p>
                                    <strong>Items:</strong> {order.items.join(', ')}
                                </p>
                                <p>
                                    <strong>Total:</strong> {order.totalAmount}
                                </p>
                                <p>
                                    <strong>Status:</strong> Completed
                                </p>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantOrdersPage;
