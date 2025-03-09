import { OrderStatusType } from 'src/constants/order-status';

export type CartItem = {
  name: string;
  price: string;
  amount: number;
};

export type UsersType = "client" | "restaurant" | "courier" | "admin" | "none";

export type TimeRange = 'day' | 'week' | 'month';

export interface Order {
  id: number;
  customerName: string;
  items: string[];
  totalAmount: number;
  status: OrderStatusType;
  createdAt: Date;
  duration: number;
}
