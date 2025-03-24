import React from 'react';
import { useNavigate } from 'react-router-dom';
import './client-restaurants.scss';
import { Wrapper } from '../../components/wrapper/wrapper';
import { restaurantsWithImage } from 'src/mocks/restaurants';

const ClientRestaurantsPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (restaurantName: string) => {
        navigate(`/client/restaurant/${restaurantName}/dishes`);
    };

    return (
        <Wrapper>
            <h2>Рестораны</h2>
            <ul className="restaurants-list">
                {restaurantsWithImage.map((restaurant) => (
                    <li key={restaurant.id} className="restaurant-item">
                        <img
                            src={
                                'https://eda.yandex/images/3709189/b8ccc4b8b96de76f32cea0cd7d83650b-1100x825.jpeg'
                            }
                            alt={restaurant.name}
                            className="restaurant-logo"
                        />
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
