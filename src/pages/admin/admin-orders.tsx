import React, { useState } from 'react';

const initialOrders = [
    { id: 1, customer: 'John Doe', items: ['Pizza', 'Salad'], total: '$25.00', status: 'pending' },
    { id: 2, customer: 'Jane Smith', items: ['Sushi', 'Miso Soup'], total: '$40.50', status: 'delivery' },
    { id: 3, customer: 'Bob Johnson', items: ['Burger', 'Fries'], total: '$15.75', status: 'complete' },
    { id: 4, customer: 'Alice Brown', items: ['Pasta', 'Garlic Bread'], total: '$30.00', status: 'pending' },
    { id: 5, customer: 'Charlie Green', items: ['Steak', 'Mashed Potatoes'], total: '$50.00', status: 'delivery' },
];

const AdminOrdersPage: React.FC = () => {
    const [orders, setOrders] = useState(initialOrders);

    const handleUpdateStatus = (id: number, status: 'canceled' | 'refunded') => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, status } : order
            )
        );
    };

    return (
        <div className="admin-orders-container">
            <h2>Admin Orders Management</h2>

            <div className="orders-section">
                <h3>Pending Orders</h3>
                <ul className="orders-list">
                    {orders.filter(order => order.status === 'pending').map((order) => (
                        <li key={order.id} className="order-item">
                            <p><strong>Customer:</strong> {order.customer}</p>
                            <p><strong>Items:</strong> {order.items.join(', ')}</p>
                            <p><strong>Total:</strong> {order.total}</p>
                            <div className="order-actions">
                                <button onClick={() => handleUpdateStatus(order.id, 'canceled')}>Cancel</button>
                                <button onClick={() => handleUpdateStatus(order.id, 'refunded')} className="refund-button">Refund</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="orders-section">
                <h3>Orders in Delivery</h3>
                <ul className="orders-list">
                    {orders.filter(order => order.status === 'delivery').map((order) => (
                        <li key={order.id} className="order-item delivery">
                            <p><strong>Customer:</strong> {order.customer}</p>
                            <p><strong>Items:</strong> {order.items.join(', ')}</p>
                            <p><strong>Total:</strong> {order.total}</p>
                            <p><strong>Status:</strong> In Delivery</p>
                            <div className="order-actions">
                                <button onClick={() => handleUpdateStatus(order.id, 'canceled')}>Cancel</button>
                                <button onClick={() => handleUpdateStatus(order.id, 'refunded')} className="refund-button">Refund</button>
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
                            <div className="order-actions">
                                <button onClick={() => handleUpdateStatus(order.id, 'canceled')}>Cancel</button>
                                <button onClick={() => handleUpdateStatus(order.id, 'refunded')} className="refund-button">Refund</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminOrdersPage;