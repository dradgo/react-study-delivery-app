import React, { useState } from 'react';

import { Wrapper } from 'src/components/wrapper/wrapper';
import { Order, TimeRange } from 'src/types/types';
import { mockOrders } from 'src/mocks/orders';
import { FilterToggle } from 'src/components/filter-toggle/filter-toggle';
import { timeFilterOptions, statusFilterOptions, amountFilterOptions } from 'src/mocks/filters';
import { OrderStatus, OrderStatusColor, OrderStatusText, OrderStatusType } from 'src/constants/order-status';
import { AmountFilter, AmountFilterRanges, AmountFilterType } from 'src/constants/amount-filter';

import './dashboard.scss';

const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('day');
  const [orders] = useState<Order[]>(mockOrders);
  const [selectedStatus, setSelectedStatus] = useState<OrderStatusType>(OrderStatus.ALL);
  const [selectedAmount, setSelectedAmount] = useState<AmountFilterType>(AmountFilter.ALL);

  const calculateStatistics = () => {
    const totalOrders = orders.length;
    const completedOrders = orders.filter(order => order.status === OrderStatus.COMPLETED).length;
    const averageDuration = orders.reduce((acc, order) => acc + order.duration, 0) / totalOrders;
    const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

    return {
      totalOrders,
      completedOrders,
      averageDuration,
      totalRevenue
    };
  };

  const stats = calculateStatistics();

  const filteredOrders = orders.filter(order => {
    const statusMatch = selectedStatus === OrderStatus.ALL || order.status === selectedStatus;
    let amountMatch = true;

    if (selectedAmount !== AmountFilter.ALL) {
      const range = AmountFilterRanges[selectedAmount];
      amountMatch = order.totalAmount >= range.min && order.totalAmount <= range.max;
    }

    return statusMatch && amountMatch;
  });

  return (
    <Wrapper>
      <div className="dashboard">
        <h1 className="dashboard__title">Панель управления рестораном</h1>

        <div className="dashboard__filters">
          <FilterToggle
            options={timeFilterOptions}
            selected={timeRange}
            onSelect={(value) => setTimeRange(value)}
            label="Период"
            variant="primary"
          />

          <FilterToggle
            options={statusFilterOptions}
            selected={selectedStatus}
            onSelect={setSelectedStatus}
            label="Статус заказа"
            variant="secondary"
          />

          <FilterToggle
            options={amountFilterOptions}
            selected={selectedAmount}
            onSelect={setSelectedAmount}
            label="Сумма заказа"
            variant="outline"
          />
        </div>

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

        <div className="dashboard__orders">
          <h2 className="dashboard__subtitle">Последние заказы</h2>
          <div className="dashboard__orders-list">
            {filteredOrders.map(order => (
              <div key={order.id} className="dashboard__order-card">
                <div className="dashboard__order-header">
                  <h3>Заказ #{order.id}</h3>
                  <span className={`dashboard__order-status ${OrderStatusColor[order.status as keyof typeof OrderStatusColor]}`}>
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
      </div>
    </Wrapper>
  );
};

export default Dashboard; 