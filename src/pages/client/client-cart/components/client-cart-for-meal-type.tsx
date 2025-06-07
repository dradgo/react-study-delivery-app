import React from 'react';

interface CartUtils {
    calculateCustomizationPrice: (item: any) => number;
    calculateFinalPrice: (item: any) => number;
    handleChangeAmount: ({ dishId, amount }: { dishId: any; amount: any }) => void;
    handleRemoveFromCart: ({ dishId }: { dishId: any }) => void;
}

interface DinnerCartListProps {
    mealType: string;
    dinnerItems: any[];
    cartUtils: CartUtils;
}

const DinnerCartList: React.FC<DinnerCartListProps> = ({ mealType, dinnerItems, cartUtils }) => {
    const {
        calculateCustomizationPrice,
        calculateFinalPrice,
        handleChangeAmount,
        handleRemoveFromCart,
    } = cartUtils;
    return (
        <>
            <h4>{mealType}</h4>
            <ul className="cart-list">
                {dinnerItems.map((item: any) => (
                    <li key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-image" />
                        <div className="cart-info">
                            <h3>{item.name}</h3>
                            <p>Base Price: {item.price}</p>
                            <p>
                                Customization Price: ${calculateCustomizationPrice(item).toFixed(2)}
                            </p>
                            <p>Total Price: ${calculateFinalPrice(item).toFixed(2)}</p>
                            {item.customization &&
                                Object.entries(item.customization)
                                    .filter(([key]) => key !== 'mealTime')
                                    .map(([key, val]) => (
                                        <div className="item__customization" key={key}>
                                            <p className="custom__key">{key}: </p>
                                            <p className="custom__value">{val as string}</p>
                                        </div>
                                    ))}
                            <div className="cart-controls">
                                <button
                                    onClick={() =>
                                        handleChangeAmount({ dishId: item.id, amount: -1 })
                                    }
                                >
                                    -
                                </button>
                                <span>{item.amount}</span>
                                <button
                                    onClick={() =>
                                        handleChangeAmount({ dishId: item.id, amount: 1 })
                                    }
                                >
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
        </>
    );
};

export default DinnerCartList;
