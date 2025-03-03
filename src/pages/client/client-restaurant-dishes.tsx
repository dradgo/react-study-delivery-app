import React from 'react';
import { useParams } from 'react-router-dom';
import {useUser} from "../../context/user-context";
import './client-restaurant-dishes.scss'
import { Wrapper } from '../../components/wrapper/wrapper';

const dishes = [
    {
        id: 1,
        name: 'Margherita Pizza',
        image: 'https://via.placeholder.com/150',
        price: '$12.99',
        nutrition: { fat: '10g', sugar: '5g', protein: '15g', calories: '300kcal' },
    },
    {
        id: 2,
        name: 'Sushi Platter',
        image: 'https://via.placeholder.com/150',
        price: '$22.50',
        nutrition: { fat: '8g', sugar: '3g', protein: '20g', calories: '250kcal' },
    },
    {
        id: 3,
        name: 'Cheeseburger',
        image: 'https://via.placeholder.com/150',
        price: '$9.99',
        nutrition: { fat: '20g', sugar: '7g', protein: '25g', calories: '450kcal' },
    },
];

const RestaurantDishesPage: React.FC = () => {
    const { restaurantName } = useParams();
    const { cart, setCart } = useUser();

    const handleAddToCart = ({dish}: { dish: any }) => {
        setCart((prevCart: any) => {
            const existingItem = prevCart.find((item : any) => item.id === dish.id);
            if (existingItem) {
                return prevCart.map((item : any) =>
                    item.id === dish.id ? { ...item, amount: item.amount + 1 } : item
                );
            } else {
                return [...prevCart, { ...dish, amount: 1 }];
            }
        });
    };

    const handleRemoveFromCart = ({dishId}: { dishId: any }) => {
        setCart((prevCart : any) => prevCart.filter((item : any) => item.id !== dishId));
    };

    const handleChangeamount = ({dishId, amount}: { dishId: any, amount: any }) => {
        setCart((prevCart : any) =>
            prevCart.map((item : any) =>
                item.id === dishId ? { ...item, amount: Math.max(1, item.amount + amount) } : item
            )
        );
    };

    return (
        <Wrapper>
            <h2>{restaurantName} Dishes</h2>
            <ul className="dishes-list">
                {dishes.map((dish) => {
                    const cartItem = cart.find((item : any) => item.id === dish.id);
                    return (
                        <li key={dish.id} className="dish-item">
                            <img src={'https://eda.yandex/images/3518584/db43262c1df92b87520028722a558fba-400x400nocrop.jpeg'} alt={dish.name} className="dish-image" />
                            <div className="dish-info">
                                <h3>{dish.name}</h3>
                                <p>Price: {dish.price}</p>
                                <p>Fat: {dish.nutrition.fat}, Sugar: {dish.nutrition.sugar}</p>
                                <p>Protein: {dish.nutrition.protein}, Calories: {dish.nutrition.calories}</p>
                                {cartItem ? (
                                    <div className="cart-controls">
                                        <button onClick={() => handleChangeamount({dishId: dish.id, amount: -1})}>-</button>
                                        <span>{cartItem.amount}</span>
                                        <button onClick={() => handleChangeamount({dishId: dish.id, amount: 1})}>+</button>
                                        <button onClick={() => handleRemoveFromCart({dishId: dish.id})} className="remove-button">Remove</button>
                                    </div>
                                ) : (
                                    <button onClick={() => handleAddToCart({dish: dish})}>Add to Cart</button>
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
