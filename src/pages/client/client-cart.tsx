import React, { useState } from 'react';
import {useUser} from "../../context/user-context";
import './client-cart.scss'
import { Wrapper } from '../../components/wrapper/wrapper';

const ClientCartPage: React.FC = () => {
    const { cart, setCart } = useUser();
    const [address, setAddress] = useState('');

    const handleRemoveFromCart = ({dishId}: { dishId: any }) => {
        setCart(cart.filter((item : any) => item.id !== dishId));
    };

    const handleChangeQuantity = ({dishId, amount}: { dishId: any, amount: any }) => {
        setCart((prevCart : any) =>
            prevCart.map((item : any) =>
                item.id === dishId ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
            )
        );
    };

    const handleCheckout = () => {
        if (!address) {
            alert('Please enter a delivery address');
            return;
        }
        alert('Order placed successfully!');
        setCart([]);
    };

    return (
        <Wrapper>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cart.map((item : any) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-image" />
                                <div className="cart-info">
                                    <h3>{item.name}</h3>
                                    <p>Price: {item.price}</p>
                                    <div className="cart-controls">
                                        <button onClick={() => handleChangeQuantity({dishId: item.id, amount: -1})}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleChangeQuantity({dishId: item.id, amount: 1})}>+</button>
                                        <button onClick={() => handleRemoveFromCart({dishId: item.id})} className="remove-button">Remove</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="delivery-section">
                        <label>
                            Delivery Address:
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your address"
                            />
                        </label>
                    </div>
                    <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                </>
            )}
        </Wrapper>
    );
};

export default ClientCartPage;
