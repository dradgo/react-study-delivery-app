import React from 'react';
import { useUser } from '../../../context/user-context';
import './client-cart.scss';
import { Wrapper } from '../../../components/wrapper/wrapper';
import { DeliverySecton } from './components/delivery-section';
import { CartItem } from "src/types/types";
import { CustomizationOption } from "src/types/menu";

const ClientCartPage: React.FC = () => {
    const { cart, setCart } = useUser();

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
                    <ul className="cart-list">
                        {cart.map((item: any) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-image" />
                                <div className="cart-info">
                                    <h3>{item.name}</h3>
                                    <p>Base Price: {item.price}</p>
                                    <p>Customization Price: ${calculateCustomizationPrice(item).toFixed(2)}</p>
                                    <p>Total Price: ${calculateFinalPrice(item).toFixed(2)}</p>
                                    {item.customization &&
                                        Object.entries(item.customization).map(([key, val]) => {
                                            console.log('debug-custom', key, val);
                                            return
                                                <div className="item__customization" key={key}>
                                                    <p className='custom__key'>{key}: </p>
                                                    <p className='custom__value'>{val as string}</p>
                                                </div>;
                                        })}
                                    <div className="cart-controls">
                                        <button onClick={() => handleChangeAmount({ dishId: item.id, amount: -1 })}>
                                            -
                                        </button>
                                        <span>{item.amount}</span>
                                        <button onClick={() => handleChangeAmount({ dishId: item.id, amount: 1 })}>
                                            +
                                        </button>
                                        <button
                                            onClick={() => handleRemoveFromCart({ dishId: item.id })}
                                            className="remove-button"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <p>Total: ${calculateTotal()}</p>
                        <p>Total Calories: {calculateTotalCalories()} kcal</p>
                    </div>
                    <DeliverySecton />
                    <button className="checkout-button" onClick={() => { }}>
                        Checkout
                    </button>
                </>
            )
            }
        </Wrapper >
    );
};

export default ClientCartPage;
