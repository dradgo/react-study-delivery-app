type Props = {
    stats: {
        totalOrders: number;
        completedOrders: number;
        averageDuration: number;
        totalRevenue: number;
    };
};

export const DashboardStats: React.FC<Props> = ({ stats }) => {
    return (
        <div className="dashboard__stats">
            <div className="dashboard__stat-card">
                <h3>Всего заказов</h3>
                <p>{stats.totalOrders}</p>
            </div>
            <div className="dashboard__stat-card">
                <h3>Выполнено заказов</h3>
                <p>{stats.completedOrders}</p>
            </div>
            <div className="dashboard__stat-card">
                <h3>Среднее время выполнения</h3>
                <p>{Math.round(stats.averageDuration)} мин</p>
            </div>
            <div className="dashboard__stat-card">
                <h3>Общая выручка</h3>
                <p>{stats.totalRevenue} ₽</p>
            </div>
        </div>
    );
};
