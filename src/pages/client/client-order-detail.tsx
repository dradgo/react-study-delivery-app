import React from 'react';
import './client-order-detail.scss';

interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}

interface Order {
    id: string;
    customer: string;
    items: OrderItem[];
    total: number;
    status: string;
}

interface OrderDetailsPageProps {
    order?: Order;
}

const OrderDetailsPage: React.FC<OrderDetailsPageProps> = () => {
    const order = {
        id: '12345',
        customer: 'John Doe',
        items: [
            { name: 'Pizza', quantity: 2, price: 12.99 },
            { name: 'Soda', quantity: 1, price: 1.99 },
        ],
        total: 27.97,
        status: 'Delivered',
    };
    return (
        <div className="order-details-container">
            <h2>Order Details</h2>
            <div className="order-info">
                <p>
                    <strong>Order ID:</strong> {order.id}
                </p>
                <p>
                    <strong>Customer:</strong> {order.customer}
                </p>
                <p>
                    <strong>Status:</strong>{' '}
                    <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                </p>
            </div>
            <h3>Items</h3>
            <ul className="order-items-list">
                {order.items.map((item, index) => (
                    <li key={index} className="order-item">
                        <p>
                            <strong>{item.name}</strong>
                        </p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
            <div className="order-total">
                <h3>Total: ${order.total.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default OrderDetailsPage;
