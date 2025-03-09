import React, { useState } from 'react';
import './courier-orders.scss';
import { Wrapper } from '../..//components/wrapper/wrapper';

const initialOrders = [
    { id: 1, restaurant: 'Pizza Place, 234 Side st', address: '123 Main St', status: 'Pending' },
    { id: 2, restaurant: 'Sushi House', address: '456 Elm St', status: 'In Progress' },
    { id: 3, restaurant: 'Burger Corner', address: '789 Oak St', status: 'Delivered' },
];

const statusOptions = ['Pending', 'In Progress', 'Delivered'];

const CourierOrdersPage: React.FC = () => {
    const [orders, setOrders] = useState(initialOrders);

    const updateStatus = (id: number, newStatus: string) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) => (order.id === id ? { ...order, status: newStatus } : order))
        );
    };

    return (
        <Wrapper>
            <h2>Courier Orders</h2>
            <ul className="orders-list">
                {orders.map((order) => (
                    <li key={order.id} className="order-item">
                        <div>
                            <strong>{order.restaurant}</strong>
                            <p>Address: {order.address}</p>
                            <p>
                                Status:{' '}
                                <span className={`status ${order.status.toLowerCase()}`}>
                                    {order.status}
                                </span>
                            </p>
                        </div>
                        <div>
                            <select
                                value={order.status}
                                onChange={(e) => updateStatus(order.id, e.target.value)}
                            >
                                {statusOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};

export default CourierOrdersPage;
