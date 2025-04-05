import { OrderStatusType } from 'src/constants/order-status';
import { CustomizationOption } from 'src/types/menu';

export type CartItem = {
    name: string;
    price: string;
    amount: number;
    customization?: Record<string, string>;
    customizations?: {
        name: string;
        options: CustomizationOption[];
    }[];
};

export type UsersType = 'client' | 'restaurant' | 'courier' | 'admin' | 'none';

export type TimeRange = 'day' | 'week' | 'month';

export type Order = {
    id: number;
    customerName: string;
    items: string[];
    totalAmount: number;
    status: OrderStatusType;
    createdAt: Date;
    duration: number;
};

export type FilterOption = {
    id: string | number;
    label: string;
    icon?: React.ReactNode;
    value: any;
};

export interface Restaurant {
    id: string;
    name: string;
    address: string;
    phone: string;
    isActive: boolean;
    rating: number;
    description?: string;
    cuisine?: string;
    openingHours?: {
        open: string;
        close: string;
    };
    createdAt: string;
    updatedAt: string;
}
