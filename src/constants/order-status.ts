export const OrderStatus = {
  ALL: 'all',
  PENDING: 'pending',
  COOKING: 'cooking',
  DELIVERY: 'delivery',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
} as const;

export type OrderStatusType = typeof OrderStatus[keyof typeof OrderStatus];

export const OrderStatusText: Record<OrderStatusType, string> = {
  [OrderStatus.ALL]: 'Все статусы',
  [OrderStatus.PENDING]: 'Ожидает',
  [OrderStatus.COOKING]: 'Готовится',
  [OrderStatus.DELIVERY]: 'Доставляется',
  [OrderStatus.COMPLETED]: 'Выполнен',
  [OrderStatus.CANCELLED]: 'Отменён'
};

export const OrderStatusColor: Record<Exclude<OrderStatusType, 'all'>, string> = {
  [OrderStatus.PENDING]: 'status--yellow',
  [OrderStatus.COOKING]: 'status--orange',
  [OrderStatus.DELIVERY]: 'status--blue',
  [OrderStatus.COMPLETED]: 'status--green',
  [OrderStatus.CANCELLED]: 'status--red'
}; 