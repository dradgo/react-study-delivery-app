import React, { useState } from 'react';
import { Wrapper } from 'src/components/wrapper/wrapper';
import { Order, TimeRange } from 'src/types/types';
import { mockOrders } from 'src/mocks/orders';
import { mockRestaurants } from 'src/mocks/restaurants';
import { FilterToggle } from 'src/components/filter-toggle/filter-toggle';
import { timeFilterOptions, statusFilterOptions } from 'src/mocks/filters';
import { OrderStatus, OrderStatusType } from 'src/constants/order-status';

import './admin-dashboard.scss';
import { AdminStats } from './components/admin-stats/admin-stats';
import { AdminRestaurants } from './components/admin-restaurants/admin-restaurants';
import { RestaurantFilter } from './components/restaurant-filter/restaurant-filter';
import { Restaurant, AdminStats as AdminStatsType, SortOption } from './types';

const AdminDashboard: React.FC = () => {
    const [timeRange, setTimeRange] = useState<TimeRange>('day');
    const [orders] = useState<Order[]>(mockOrders);
    const [restaurants] = useState<Restaurant[]>(mockRestaurants);
    const [selectedStatus, setSelectedStatus] = useState<OrderStatusType>(OrderStatus.ALL);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('totalOrders');

    const calculateStatistics = (): AdminStatsType => {
        const totalOrders = orders.length;
        const completedOrders = orders.filter(
            (order) => order.status === OrderStatus.COMPLETED
        ).length;
        const cancelledOrders = orders.filter(
            (order) => order.status === OrderStatus.CANCELLED
        ).length;
        const pendingOrders = orders.filter(
            (order) => order.status === OrderStatus.PENDING || order.status === OrderStatus.COOKING
        ).length;
        const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);
        const totalRestaurants = restaurants.length;

        return {
            totalOrders,
            completedOrders,
            cancelledOrders,
            pendingOrders,
            totalRevenue,
            totalRestaurants,
        };
    };

    const stats = calculateStatistics();

    // Filter and sort restaurants
    const filteredRestaurants = restaurants
        .filter((restaurant) => {
            const nameMatch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
            return nameMatch;
        })
        .sort((a, b) => {
            if (sortBy === 'totalOrders') {
                return b.totalOrders - a.totalOrders;
            } else if (sortBy === 'revenue') {
                return b.revenue - a.revenue;
            } else {
                return b.rating - a.rating;
            }
        });

    return (
        <Wrapper>
            <div className="admin-dashboard">
                <h1 className="admin-dashboard__title">Панель администратора</h1>

                <div className="admin-dashboard__filters">
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

                    <RestaurantFilter
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        sortBy={sortBy}
                        onSortChange={setSortBy}
                    />
                </div>

                <AdminStats stats={stats} />
                <AdminRestaurants restaurants={filteredRestaurants} />
            </div>
        </Wrapper>
    );
};

export default AdminDashboard;
