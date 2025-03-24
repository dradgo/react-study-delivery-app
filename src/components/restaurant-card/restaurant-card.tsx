export const RestaurantCard = ({ restaurant }: { restaurant: any }) => {
    return (
        <div>
            <li key={restaurant.id} className="restaurant-item">
                <img
                    src={
                        'https://eda.yandex/images/3709189/b8ccc4b8b96de76f32cea0cd7d83650b-1100x825.jpeg'
                    }
                    alt={restaurant.name}
                    className="restaurant-logo"
                />
                <div className="restaurant-info">
                    <h3>{restaurant.name}</h3>
                    <p>Address: {restaurant.address}</p>
                    <p>Delivery Time: {restaurant.deliveryTime}</p>
                    <p>Cuisine: {restaurant.cuisine}</p>
                    {/* <button onClick={() => handleNavigate(restaurant.name)}>Go to Dishes</button> */}
                </div>
            </li>
        </div>
    );
};
