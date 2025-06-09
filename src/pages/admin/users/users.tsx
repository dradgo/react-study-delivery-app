import React, { useState } from 'react';
import './users.scss';
import { restaurantsWithImage } from 'src/mocks/restaurants';
import { RestaurantCard } from 'src/components/restaurant-card/restaurant-card';
import { CustomerCard } from 'src/components/сustomer-сard/customer-card';
import Input from 'src/components/input/input';

type Tabs = 'customers' | 'restaurants';

interface Customer {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
    favoriteCuisine: string;
}

interface Restaurant {
    id: number;
    name: string;
    email: string;
    location: string;
    isOpen: boolean;
    cuisineType: string;
}

const mockCustomers: Customer[] = [
    {
        id: 1,
        name: 'Ирина Иванова',
        email: 'irina.ivanova@example.com',
        age: 25,
        isActive: true,
        favoriteCuisine: 'Итальянская',
    },
    {
        id: 2,
        name: 'Алексей Петров',
        email: 'alexey.petrov@example.com',
        age: 30,
        isActive: false,
        favoriteCuisine: 'Японская',
    },
    {
        id: 3,
        name: 'Мария Смирнова',
        email: 'maria.smirnova@example.com',
        age: 22,
        isActive: true,
        favoriteCuisine: 'Французская',
    },

    {
        id: 4,
        name: 'Ирина Иванова',
        email: 'irina.ivanova@example.com',
        age: 25,
        isActive: true,
        favoriteCuisine: 'Итальянская',
    },
    {
        id: 5,
        name: 'Алексей Петров',
        email: 'alexey.petrov@example.com',
        age: 30,
        isActive: false,
        favoriteCuisine: 'Японская',
    },
    {
        id: 6,
        name: 'Мария Смирнова',
        email: 'maria.smirnova@example.com',
        age: 22,
        isActive: true,
        favoriteCuisine: 'Французская',
    },
];

const mockRestaurants: Restaurant[] = [
    {
        id: 1,
        name: 'La Bella Italia',
        email: 'contact@labellaitalia.com',
        location: 'Москва, ул. Пушкина, 10',
        isOpen: true,
        cuisineType: 'Итальянская',
    },
    {
        id: 2,
        name: 'Sakura Sushi',
        email: 'info@sakurasushi.com',
        location: 'Санкт-Петербург, Невский пр., 25',
        isOpen: false,
        cuisineType: 'Японская',
    },
    {
        id: 3,
        name: 'Le Gourmet',
        email: 'hello@legourmet.com',
        location: 'Москва, Тверская ул., 15',
        isOpen: true,
        cuisineType: 'Французская',
    },
];

export const Users = () => {
    const [activeTab, setActiveTab] = useState<Tabs>('customers');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const getFilteredValues = () => {
        switch (activeTab) {
            case 'customers':
                return mockCustomers.filter((customer) => {
                    return (
                        customer.name.toLowerCase().includes(searchQuery) ||
                        customer.email.toLowerCase().includes(searchQuery) ||
                        customer.favoriteCuisine.toLowerCase().includes(searchQuery)
                    );
                });
            case 'restaurants':
                return mockRestaurants.filter((restaurant) => {
                    return (
                        restaurant.name.toLowerCase().includes(searchQuery) ||
                        restaurant.location.toLowerCase().includes(searchQuery) ||
                        restaurant.email.toLowerCase().includes(searchQuery) ||
                        restaurant.cuisineType.toLowerCase().includes(searchQuery)
                    );
                });
            default:
                return [];
        }
    };

    return (
        <div className="users__container">
            <div className="users__tabs">
                <div
                    className={`tab ${activeTab === 'customers' ? 'active' : ''}`}
                    onClick={() => setActiveTab('customers')}
                >
                    <h3>Клиенты</h3>
                </div>

                <div
                    className={`tab ${activeTab === 'restaurants' ? 'active' : ''}`}
                    onClick={() => setActiveTab('restaurants')}
                >
                    <h3>Рестораны</h3>
                </div>
            </div>

            <div>
                <Input
                    type="text"
                    placeholder="Поиск..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            <div className="tab-content">
                {activeTab === 'customers' && (
                    <div className="customers-container">
                        {getFilteredValues().map((customer) => (
                            <CustomerCard key={customer.id} customer={customer as Customer} />
                        ))}
                    </div>
                )}

                {activeTab === 'restaurants' && (
                    <div className="restaurants-container">
                        {getFilteredValues().map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
