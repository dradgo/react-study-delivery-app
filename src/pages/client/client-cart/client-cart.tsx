import React from 'react';
import { useUser } from '../../../context/user-context';
import './client-cart.scss';
import { Wrapper } from '../../../components/wrapper/wrapper';
import { DeliverySecton } from './components/delivery-section';
import { CartItem } from 'src/types/types';
import { CustomizationOption } from 'src/types/menu';
import DinnerCartList from 'src/pages/client/client-cart/components/client-cart-for-meal-type';

const ClientCartPage: React.FC = () => {
    const { cart, setCart } = useUser();

    const getBreakfastCard = () => {
        return cart.filter((item: CartItem) => item.mealTime === 'breakfast');
    };
    const getLunchCard = () => {
        return cart.filter((item: CartItem) => item.mealTime === 'lunch');
    };
    const getDinnerCard = () => {
        return cart.filter((item: CartItem) => item.mealTime === 'dinner');
    };

    const calculateCustomizationPrice = (item: CartItem) => {
        let customizationExtra = 0;
        const customization = item.customization || {};
        item.customizations?.forEach((custom) => {
            if (customization[custom.name]) {
                custom.options.forEach((option) => {
                    if (option.value === customization[custom.name]) {
                        customizationExtra += option.extraPrice || 0;
                    }
                });
            }
        });
        return customizationExtra;
    };
    const calculateFinalPrice = (item: CartItem) => {
        const basePrice = Number(item.price.substring(1)) || 0;
        console.log('basePrice:', basePrice);
        console.log('item:', item);
        var customizationExtra = 0;
        const customization = item.customization || {};
        item.customizations?.forEach((item: { name: string; options: CustomizationOption[] }) => {
            if (item.options) {
                if (customization[item.name]) {
                    item.options.forEach((option: CustomizationOption) => {
                        if (option.value === customization[item.name]) {
                            customizationExtra += option.extraPrice || 0;
                        }
                    });
                }
            }
        });
        console.log('extraPrice:' + customizationExtra);
        return basePrice + customizationExtra;
    };
    const handleRemoveFromCart = ({ dishId }: { dishId: any }) => {
        setCart(cart.filter((item: any) => item.id !== dishId));
    };

    const handleChangeAmount = ({ dishId, amount }: { dishId: any; amount: any }) => {
        setCart((prevCart: any) =>
            prevCart.map((item: any) =>
                item.id === dishId ? { ...item, amount: Math.max(1, item.amount + amount) } : item
            )
        );
    };
    const calculateTotal = () => {
        return cart
            .reduce((total, item) => total + calculateFinalPrice(item) * item.amount, 0)
            .toFixed(2);
    };
    const calculateTotalCalories = () => {
        return cart.reduce((total, item) => {
            console.log('item:', item);
            const itemCalories = parseInt(item.nutrition.calories) || 0;
            return total + itemCalories * item.amount;
        }, 0);
    };
    const totalPrice = cart.reduce(
        (total: number, item: any) => total + Number(item.price) * item.amount,
        0
    );
    return (
        <Wrapper style={{ width: '790px' }}>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <h3 className="cart-empty">Your cart is empty</h3>
            ) : (
                <>
                    <DinnerCartList
                        mealType="Breakfast"
                        dinnerItems={getBreakfastCard()}
                        calculateCustomizationPrice={calculateCustomizationPrice}
                        calculateFinalPrice={calculateFinalPrice}
                        handleChangeAmount={handleChangeAmount}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                    <DinnerCartList
                        mealType="Lunch"
                        dinnerItems={getLunchCard()}
                        calculateCustomizationPrice={calculateCustomizationPrice}
                        calculateFinalPrice={calculateFinalPrice}
                        handleChangeAmount={handleChangeAmount}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />

                    <DinnerCartList
                        mealType="Dinner"
                        dinnerItems={getDinnerCard()}
                        calculateCustomizationPrice={calculateCustomizationPrice}
                        calculateFinalPrice={calculateFinalPrice}
                        handleChangeAmount={handleChangeAmount}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />

                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <p>Total: ${calculateTotal()}</p>
                        <p>Total Calories: {calculateTotalCalories()} kcal</p>
                    </div>
                    <DeliverySecton />
                    <button className="checkout-button" onClick={() => {}}>
                        Checkout
                    </button>
                </>
            )}
        </Wrapper>
    );
};

export default ClientCartPage;
