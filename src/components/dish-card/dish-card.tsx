import { MenuItem } from "../../types/menu";
import { CartItem } from "../../types/types";

interface DishCardProps {
  dish: MenuItem;
  cartItem?: CartItem;
  handleAddToCart: (params: { dish: MenuItem }) => void;
  handleChangeAmount: (params: { dishId: number; amount: number }) => void;
  handleRemoveFromCart: (params: { dishId: number }) => void;
}

const DishCard: React.FC<DishCardProps> = ({
  dish,
  cartItem,
  handleAddToCart,
  handleChangeAmount,
  handleRemoveFromCart,
}) => {
  return (
    <div className="dish-card">
      <img
        src={dish.image}
        alt={dish.name}
        className="dish-image"
      />
      <div className="dish-info">
        <h3>{dish.name}</h3>
        <p>Цена: {dish.price}</p>
        <p>Состав: {dish.nutrition.fat}, Сахар: {dish.nutrition.sugar}, Белок: {dish.nutrition.protein}, Калории: {dish.nutrition.calories}</p>
        <p>Есть в наличии: {dish.available ? 'Yes' : 'No'}</p>
        {cartItem ? (
          <div className="cart-controls">
            <button onClick={() => handleChangeAmount({ dishId: dish.id, amount: -1 })}>-</button>
            <span>{cartItem.amount}</span>
            <button onClick={() => handleChangeAmount({ dishId: dish.id, amount: 1 })}>+</button>
            <button onClick={() => handleRemoveFromCart({ dishId: dish.id })} className="remove-button">
              Remove
            </button>
          </div>
        ) : (
          <button onClick={() => handleAddToCart({ dish })}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default DishCard;