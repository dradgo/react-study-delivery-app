import { FilterOption } from 'src/types/types';
import { OrderStatus, OrderStatusText } from 'src/constants/order-status';
import { AmountFilter, AmountFilterText } from 'src/constants/amount-filter';

export const timeFilterOptions: FilterOption[] = [
    { id: 'day', label: 'День', value: 'day' },
    { id: 'week', label: 'Неделя', value: 'week' },
    { id: 'month', label: 'Месяц', value: 'month' },
];

export const statusFilterOptions: FilterOption[] = [
    {
        id: OrderStatus.ALL,
        label: OrderStatusText[OrderStatus.ALL],
        value: OrderStatus.ALL,
    },
    {
        id: OrderStatus.PENDING,
        label: OrderStatusText[OrderStatus.PENDING],
        value: OrderStatus.PENDING,
    },
    {
        id: OrderStatus.COOKING,
        label: OrderStatusText[OrderStatus.COOKING],
        value: OrderStatus.COOKING,
    },
    {
        id: OrderStatus.DELIVERY,
        label: OrderStatusText[OrderStatus.DELIVERY],
        value: OrderStatus.DELIVERY,
    },
    {
        id: OrderStatus.COMPLETED,
        label: OrderStatusText[OrderStatus.COMPLETED],
        value: OrderStatus.COMPLETED,
    },
    {
        id: OrderStatus.CANCELLED,
        label: OrderStatusText[OrderStatus.CANCELLED],
        value: OrderStatus.CANCELLED,
    },
];

export const amountFilterOptions: FilterOption[] = [
    {
        id: AmountFilter.ALL,
        label: AmountFilterText[AmountFilter.ALL],
        value: AmountFilter.ALL,
    },
    {
        id: AmountFilter.LESS_1000,
        label: AmountFilterText[AmountFilter.LESS_1000],
        value: AmountFilter.LESS_1000,
    },
    {
        id: AmountFilter.FROM_1000_TO_2000,
        label: AmountFilterText[AmountFilter.FROM_1000_TO_2000],
        value: AmountFilter.FROM_1000_TO_2000,
    },
    {
        id: AmountFilter.MORE_2000,
        label: AmountFilterText[AmountFilter.MORE_2000],
        value: AmountFilter.MORE_2000,
    },
];
