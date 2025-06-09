import React, { JSX } from "react";
import './customer-card.scss';
import { Wrapper } from '../wrapper/wrapper';

interface Customer {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
    favoriteCuisine: string;
}

export const CustomerCard = ({ customer }: { customer: Customer }): JSX.Element => {
    return (
        <Wrapper className="customer-card">
            <h4 className="customer-name">{customer.name}</h4>
            <p className="customer-info">
                <strong>Email:</strong> {customer.email}
            </p>
            <p className="customer-info">
                <strong>Возраст:</strong> {customer.age} лет
            </p>
            <p className="customer-info">
                <strong>Статус:</strong> {customer.isActive ? 'Активен' : 'Неактивен'}
            </p>
            <p className="customer-info">
                <strong>Любимая кухня:</strong> {customer.favoriteCuisine}
            </p>
        </Wrapper>
    );
};
