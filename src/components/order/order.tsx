type Props = {
    order: {
        id: number;
        restaurant: string;
        total: string;
        status: string;
    };
    handleViewOrder: (orderId: string) => void;
};
export const Order = ({ order, handleViewOrder }: Props): JSX.Element => {
    return (
        <div>
            <strong>{order.restaurant}</strong>
            <p>Total: {order.total}</p>
            <p>
                Status:{' '}
                <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
            </p>
            <button onClick={() => handleViewOrder(order.id.toString())}>View Order</button>
        </div>
    );
};
