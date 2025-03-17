export type Restaurant = {
    id: number;
    name: string;
    totalOrders: number;
    completedOrders: number;
    cancelledOrders: number;
    pendingOrders: number;
    revenue: number;
    rating: number;
};

export type AdminStats = {
    totalOrders: number;
    completedOrders: number;
    cancelledOrders: number;
    pendingOrders: number;
    totalRevenue: number;
    totalRestaurants: number;
};

export type SortOption = 'totalOrders' | 'revenue' | 'rating';
