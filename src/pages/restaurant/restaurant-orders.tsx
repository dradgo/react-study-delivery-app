import React, { useState } from 'react';

const initialOrders = [
    { id: 1, customer: 'John Doe', items: ['Pizza', 'Salad'], total: '$25.00', status: 'pending' },
    { id: 2, customer: 'Jane Smith', items: ['Sushi', 'Miso Soup'], total: '$40.50', status: 'pending' },
    { id: 3, customer: 'Bob Johnson', items: ['Burger', 'Fries'], total: '$15.75', status: 'complete' },
];

const RestaurantOrdersPage: React.FC = () => {
    const [orders, setOrders] = useState(initialOrders);

    const handleUpdateStatus = (id: number, status: 'complete' | 'declined') => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, status } : order
            )
        );
    };

    return (
        <div className="orders-container">
            <h2>Restaurant Orders</h2>

            <div className="orders-section">
                <h3>Pending Orders</h3>
                <ul className="orders-list">
                    {orders.filter(order => order.status === 'pending').map((order) => (
                        <li key={order.id} className="order-item">
                            <p><strong>Customer:</strong> {order.customer}</p>
                            <p><strong>Items:</strong> {order.items.join(', ')}</p>
                            <p><strong>Total:</strong> {order.total}</p>
                            <div className="order-actions">
                                <button onClick={() => handleUpdateStatus(order.id, 'complete')}>Complete</button>
                                <button onClick={() => handleUpdateStatus(order.id, 'declined')} className="decline-button">Decline</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="orders-section">
                <h3>Completed Orders</h3>
                <ul className="orders-list">
                    {orders.filter(order => order.status === 'complete').map((order) => (
                        <li key={order.id} className="order-item completed">
                            <p><strong>Customer:</strong> {order.customer}</p>
                            <p><strong>Items:</strong> {order.items.join(', ')}</p>
                            <p><strong>Total:</strong> {order.total}</p>
                            <p><strong>Status:</strong> Completed</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantOrdersPage;
