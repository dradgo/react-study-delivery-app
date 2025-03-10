import { OrderStatusColor, OrderStatusText } from 'src/constants/order-status';
import { Order } from 'src/types/types';

type Props = {
    orders: Order[];
};

export const DashboardOrders = ({ orders }: Props) => {
    return (
        <div className="dashboard__orders">
            <h2 className="dashboard__title">Последние заказы</h2>
            <div className="dashboard__orders-list">
                {orders.map((order) => (
                    <div key={order.id} className="dashboard__order-card">
                        <div className="dashboard__order-header">
                            <h3>Заказ #{order.id}</h3>
                            <span
                                className={`dashboard__order-status ${OrderStatusColor[order.status as keyof typeof OrderStatusColor]}`}
                            >
                                {OrderStatusText[order.status]}
                            </span>
                        </div>
                        <div className="dashboard__order-info">
                            <p>Клиент: {order.customerName}</p>
                            <p>Сумма: {order.totalAmount} ₽</p>
                            <p>Время выполнения: {order.duration} мин</p>
                            <p>Состав заказа: {order.items.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
