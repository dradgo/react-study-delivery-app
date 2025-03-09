type Props = {
    order: {
        id: number;
        restaurant: string;
        total: string;
        status: string;
    };
};
export const Order = ({ order }: Props) => {
    return (
        <div>
            <strong>{order.restaurant}</strong>
            <p>Total: {order.total}</p>
            <p>
                Status:{' '}
                <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
            </p>
        </div>
    );
};
