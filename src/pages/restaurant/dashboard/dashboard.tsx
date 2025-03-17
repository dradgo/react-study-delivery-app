import React, { useState } from 'react';

import { Wrapper } from 'src/components/wrapper/wrapper';
import { Order, TimeRange } from 'src/types/types';
import { mockOrders } from 'src/mocks/orders';
import { FilterToggle } from 'src/components/filter-toggle/filter-toggle';
import { timeFilterOptions, statusFilterOptions, amountFilterOptions } from 'src/mocks/filters';
import { OrderStatus, OrderStatusType } from 'src/constants/order-status';
import { AmountFilter, AmountFilterRanges, AmountFilterType } from 'src/constants/amount-filter';

import './dashboard.scss';
import { DashboardStats } from './components/dashboard-stats/dashboard-stats';
import { DashboardOrders } from './components/dashboard-orders/dashboard-orders';

const Dashboard: React.FC = () => {
    const [timeRange, setTimeRange] = useState<TimeRange>('day');
    const [orders] = useState<Order[]>(mockOrders);
    const [selectedStatus, setSelectedStatus] = useState<OrderStatusType>(OrderStatus.ALL);
    const [selectedAmount, setSelectedAmount] = useState<AmountFilterType>(AmountFilter.ALL);

    const calculateStatistics = () => {
        const totalOrders = orders.length;
        const completedOrders = orders.filter(
            (order) => order.status === OrderStatus.COMPLETED
        ).length;
        const averageDuration =
            orders.reduce((acc, order) => acc + order.duration, 0) / totalOrders;
        const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

        return {
            totalOrders,
            completedOrders,
            averageDuration,
            totalRevenue,
        };
    };

    const stats = calculateStatistics();

    const filteredOrders = orders.filter((order) => {
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
                        onSelect={setTimeRange}
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
                <DashboardStats stats={stats} />
                <DashboardOrders orders={filteredOrders} />
            </div>
        </Wrapper>
    );
};

export default Dashboard;
