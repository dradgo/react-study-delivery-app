import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/user-context';
import './client-restaurant-dishes.scss';
import { Wrapper } from '../../components/wrapper/wrapper';
import { dishesMock } from '../../mocks/dishes';

const RestaurantDishesPage: React.FC = () => {
    const { restaurantName } = useParams();
    const { cart, setCart } = useUser();
    const [selectedCustomizations, setSelectedCustomizations] = useState<{
        [dishId: number]: { [customName: string]: string };
    }>({});

    const handleAddToCart = ({ dish }: { dish: any }) => {
        const customization = selectedCustomizations[dish.id] || {};
        setCart((prevCart: any) => {

            const existingItem = prevCart.find((item: any) => item.id === dish.id);
            if (existingItem) {
                return prevCart.map((item: any) =>
                    item.id === dish.id ? { ...item, amount: item.amount + 1 } : item
                );
            } else {

                const dishWithCustomization = {
                    ...dish,
                    customization,
                    amount: 1,
                };
                return [...prevCart, dishWithCustomization];
            }
        });
    };

    const handleRemoveFromCart = ({ dishId }: { dishId: any }) => {
        setCart((prevCart: any) => prevCart.filter((item: any) => item.id !== dishId));
    };

    const handleChangeamount = ({ dishId, amount }: { dishId: any; amount: any }) => {
        setCart((prevCart: any) =>
            prevCart.map((item: any) =>
                item.id === dishId ? { ...item, amount: Math.max(1, item.amount + amount) } : item
            )
        );
    };

    return (
        <Wrapper>
            <h2>{restaurantName} - Меню</h2>
            <ul className="dishes-list">
                {dishesMock.map((dish) => {
                    const cartItem = cart.find((item: any) => {
                        return item.id == dish.id
                    });

                    console.log('debug-2', cartItem);

                    return (
                        <li key={dish.id} className="dish-item">
                            <img src={dish.image} alt={dish.name} className="dish-image" />
                            <div className="dish-info">
                                <h3>{dish.name}</h3>
                                <p>Price: {dish.price}</p>
                                <p>
                                    Fat: {dish.nutrition.fat}, Sugar: {dish.nutrition.sugar}
                                </p>
                                <p>
                                    Protein: {dish.nutrition.protein}, Calories:{' '}
                                    {dish.nutrition.calories}
                                </p>
                                {dish.customizations?.map((customization) => (
                                    <div key={customization.name}>
                                        <label>{customization.name}:</label>
                                        <select
                                            value={
                                                selectedCustomizations[dish.id]?.[
                                                customization.name
                                                ] || ''
                                            }
                                            onChange={(e) =>
                                                setSelectedCustomizations((prev) => ({
                                                    ...prev,
                                                    [dish.id]: {
                                                        ...prev[dish.id],
                                                        [customization.name]: e.target.value,
                                                    },
                                                }))
                                            }
                                        >
                                            <option value="">Select...</option>
                                            {customization.options.map((opt) => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                                {cartItem ? (
                                    <div className="cart-controls">
                                        <button
                                            onClick={() =>
                                                handleChangeamount({ dishId: dish.id, amount: -1 })
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{cartItem.amount}</span>
                                        <button
                                            onClick={() =>
                                                handleChangeamount({ dishId: dish.id, amount: 1 })
                                            }
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleRemoveFromCart({ dishId: dish.id })
                                            }
                                            className="remove-button"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ) : (
                                    <button onClick={() => handleAddToCart({ dish: dish })}>
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Wrapper>
    );
};

export default RestaurantDishesPage;
