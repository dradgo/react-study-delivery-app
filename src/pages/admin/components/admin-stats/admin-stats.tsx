import React from 'react';
import { AdminStats as AdminStatsType } from '../../types';

type Props = {
  stats: AdminStatsType;
};

export const AdminStats: React.FC<Props> = ({ stats }) => {
  return (
    <div className="admin-dashboard__stats">
      <div className="admin-dashboard__stat-card">
        <h3>Всего ресторанов</h3>
        <p>{stats.totalRestaurants}</p>
      </div>
      <div className="admin-dashboard__stat-card">
        <h3>Всего заказов</h3>
        <p>{stats.totalOrders}</p>
      </div>
      <div className="admin-dashboard__stat-card">
        <h3>Выполнено заказов</h3>
        <p>{stats.completedOrders}</p>
      </div>
      <div className="admin-dashboard__stat-card">
        <h3>Отменено заказов</h3>
        <p>{stats.cancelledOrders}</p>
      </div>
      <div className="admin-dashboard__stat-card">
        <h3>В обработке</h3>
        <p>{stats.pendingOrders}</p>
      </div>
      <div className="admin-dashboard__stat-card">
        <h3>Общая выручка</h3>
        <p>{stats.totalRevenue} ₽</p>
      </div>
    </div>
  );
}; 