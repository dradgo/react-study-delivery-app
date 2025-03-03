import React from 'react';
import { useNavigate } from 'react-router-dom';
import './client-restaurants.scss';
import { Wrapper } from '../../components/wrapper/wrapper';

const restaurants = [
    {
        id: 1,
        name: 'Pizza Place',
        logo: 'https://via.placeholder.com/100',
        address: '123 Main St',
        deliveryTime: '30-40 min',
        cuisine: 'Italian',
    },
    {
        id: 2,
        name: 'Sushi House',
        logo: 'https://via.placeholder.com/100',
        address: '456 Elm St',
        deliveryTime: '25-35 min',
        cuisine: 'Japanese',
    },
    {
        id: 3,
        name: 'Burger Corner',
        logo: 'https://via.placeholder.com/100',
        address: '789 Oak St',
        deliveryTime: '20-30 min',
        cuisine: 'American',
    },
];

const ClientRestaurantsPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (restaurantName: string) => {
        navigate(`/client/restaurant/${restaurantName}/dishes`);
    };

    return (
        <Wrapper>
            <h2>Restaurants</h2>
            <ul className="restaurants-list">
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id} className="restaurant-item">
                        <img src={restaurant.logo} alt={restaurant.name} className="restaurant-logo" />
                        <div className="restaurant-info">
                            <h3>{restaurant.name}</h3>
                            <p>Address: {restaurant.address}</p>
                            <p>Delivery Time: {restaurant.deliveryTime}</p>
                            <p>Cuisine: {restaurant.cuisine}</p>
                            <button onClick={() => handleNavigate(restaurant.name)}>
                                Go to Dishes
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};

export default ClientRestaurantsPage;
