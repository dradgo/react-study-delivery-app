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

    const [filters, setFilters] = useState<{ name: string; calories: number | '' }>({
        name: '',
        calories: '',
    });

    const handleOpenDialog = (item: any) => {
        setSelectedItem(item);
    };

    const handleAddToCart = (selectedOptions: Record<any, any>) => {
        const { dish } = selectedItem || {};
        const customization = selectedOptions || {};
        const mealTime = selectedOptions.mealTime || '';
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
                    mealTime: mealTime,
                    amount: 1,
                };
                return [...prevCart, dishWithCustomization];
            }
        });
    };
    // Filtering logic
    const filteredDishes = dishesMock.filter((dish) => {
        const matchesName = dish.name.toLowerCase().includes(filters.name.toLowerCase());
        const matchesCalories =
            filters.calories === '' || parseInt(dish.nutrition.calories) <= filters.calories;
        return dish.restaurantName === restaurantName && matchesName && matchesCalories;
    });

    return (
        <Wrapper>
            <h2>{restaurantName} - Меню</h2>
            {/* Filter inputs */}
            <div className="filters">
                <input
                    type="text"
                    placeholder="Filter by name"
                    value={filters.name}
                    onChange={(e) => setFilters((prev) => ({ ...prev, name: e.target.value }))}
                />
                <input
                    type="number"
                    placeholder="Max calories"
                    value={filters.calories}
                    onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            calories: Number(e.target.value) || '',
                        }))
                    }
                />
            </div>
            <ul className="dishes-list">
                {filteredDishes.map((dish) => {
                    const cartItem = cart.find((item: any) => {
                        return item.id == dish.id;
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
                open={selectedItem != null}
                onClose={() => setSelectedItem(null)}
                customizations={selectedItem?.dish.customizations || []}
                onAddToCart={handleAddToCart}
            />
        </Wrapper>
    );
};

export default RestaurantDishesPage;
