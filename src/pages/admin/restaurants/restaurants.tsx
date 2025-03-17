import React, { useState } from 'react';
import { Restaurant } from 'src/types/types';
import Input from 'src/components/input/input';
import { mockRestaurants } from 'src/mocks/restaurants';
import './restaurants.scss';

const Restaurants: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [restaurants, setRestaurants] = useState<Restaurant[]>(mockRestaurants);

    const filteredRestaurants = restaurants.filter((restaurant) => {
        const searchLower = searchQuery.toLowerCase();
        return (
            restaurant.name.toLowerCase().includes(searchLower) ||
            restaurant.address.toLowerCase().includes(searchLower) ||
            restaurant.phone.includes(searchQuery) ||
            restaurant.cuisine?.toLowerCase().includes(searchLower)
        );
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleBlockRestaurant = (restaurantId: string) => {
        setRestaurants((prevRestaurants) =>
            prevRestaurants.map((restaurant) =>
                restaurant.id === restaurantId
                    ? { ...restaurant, isActive: !restaurant.isActive }
                    : restaurant
            )
        );
    };

    const handleDeleteRestaurant = (restaurantId: string) => {
        if (window.confirm('Вы уверены, что хотите удалить этот ресторан?')) {
            setRestaurants((prevRestaurants) =>
                prevRestaurants.filter((restaurant) => restaurant.id !== restaurantId)
            );
        }
    };

    return (
        <div className="restaurants">
            <div className="restaurants__header">
                <h1>Управление ресторанами</h1>
                <Input
                    type="text"
                    placeholder="Поиск ресторана..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            <div className="restaurants__stats">
                <div className="restaurants__stat-card">
                    <h3>Всего ресторанов</h3>
                    <p className="restaurants__stat-number">{restaurants.length}</p>
                </div>
                <div className="restaurants__stat-card">
                    <h3>Активных</h3>
                    <p className="restaurants__stat-number">
                        {restaurants.filter((r) => r.isActive).length}
                    </p>
                </div>
                <div className="restaurants__stat-card">
                    <h3>Заблокированных</h3>
                    <p className="restaurants__stat-number">
                        {restaurants.filter((r) => !r.isActive).length}
                    </p>
                </div>
            </div>

            <div className="restaurants__container">
                <div className="restaurants__header">
                    <div className="restaurants__item">Название</div>
                    <div className="restaurants__item">Адрес</div>
                    <div className="restaurants__item">Телефон</div>
                    <div className="restaurants__item">Статус</div>
                    <div className="restaurants__item">Рейтинг</div>
                    <div className="restaurants__item">Действия</div>
                </div>
                <div>
                    {filteredRestaurants.map((restaurant) => (
                        <div key={restaurant.id} className="restaurants__table-row">
                            <div className="restaurants__item">{restaurant.name}</div>
                            <div className="restaurants__item">{restaurant.address}</div>
                            <div className="restaurants__item">{restaurant.phone}</div>
                            <div className="restaurants__item">
                                {restaurant.isActive ? (
                                    <span className="restaurants__status restaurants__status--active">
                                        Активен
                                    </span>
                                ) : (
                                    <span className="restaurants__status restaurants__status--blocked">
                                        Заблокирован
                                    </span>
                                )}
                            </div>
                            <div className="restaurants__item">{restaurant.rating}</div>
                            <div className="restaurants__item">
                                <button
                                    className="restaurants__action-button"
                                    onClick={() => handleBlockRestaurant(restaurant.id)}
                                >
                                    {restaurant.isActive ? 'Заблокировать' : 'Разблокировать'}
                                </button>
                                <button
                                    className="restaurants__action-button restaurants__action-button--delete"
                                    onClick={() => handleDeleteRestaurant(restaurant.id)}
                                >
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Restaurants;
