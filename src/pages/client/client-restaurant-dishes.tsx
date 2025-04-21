import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/user-context';
import './client-restaurant-dishes.scss';
import { Wrapper } from '../../components/wrapper/wrapper';
import { CustomizationDialog } from './client-restaraunt-dishes/customization-dialog';
import { dishesMock } from '../../mocks/dishes';
import { MenuItem } from '../../types/menu';


const RestaurantDishesPage: React.FC = () => {
    const { restaurantName } = useParams();
    const { cart, setCart } = useUser();
    const [selectedItem, setSelectedItem] = useState<any | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = (item: any) => {
        console.log('debug-1', item);
        setSelectedItem(item);
        setDialogOpen(true);
    };

    const handleAddToCart = (selectedOptions: Record<any, any>) => {
        const { dish } = selectedItem || {};
        console.log('Selected dish:', dish);
        console.log('Selected options:', selectedOptions);
        const customization = selectedOptions || {};
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

    return (
        <Wrapper>
            <h2>{restaurantName} - Меню</h2>
            <ul className="dishes-list">
                {dishesMock.filter((dish) => {
                    return dish.restaurantName == restaurantName
                }).map((dish) => {
                    const cartItem = cart.find((item: any) => {
                        return item.id == dish.id
                    });

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
                                <div className="cart-controls">
                                    <button onClick={() => handleOpenDialog({ dish: dish })}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <CustomizationDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                customizations={selectedItem?.dish.customizations || []}
                onAddToCart={handleAddToCart}
            />
        </Wrapper>
    );
};

export default RestaurantDishesPage;
