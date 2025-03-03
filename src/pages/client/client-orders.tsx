import React from 'react';
import './client-orders.css';
import { Order } from '../../components/order/order';
import { Wrapper } from '../../components/wrapper/wrapper';

const orders = [
    { id: 1, restaurant: 'Pizza Place', total: '$20.99', status: 'Delivered' },
    { id: 2, restaurant: 'Sushi House', total: '$35.50', status: 'In Progress' },
    { id: 3, restaurant: 'Burger Corner', total: '$15.75', status: 'Pending' }
];

const ClientOrdersPage: React.FC = () => {
    return (
        <Wrapper>
            <h2>My Orders</h2>
            <ul className="orders-list">
                {orders.map(order => (
                    <li key={order.id} className="order-item">
                        <Order order={order} />
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};

export default ClientOrdersPage;