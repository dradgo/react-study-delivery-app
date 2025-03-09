import { Order } from 'src/types/types';
import { OrderStatus } from 'src/constants/order-status';

export const mockOrders: Order[] = [
    {
        id: 1,
        customerName: 'Иван Петров',
        items: ['Пицца Маргарита', 'Кока-кола'],
        totalAmount: 850,
        status: OrderStatus.COMPLETED,
        createdAt: new Date('2024-03-10T14:30:00'),
        duration: 45,
    },
    {
        id: 2,
        customerName: 'Анна Сидорова',
        items: ['Суши сет', 'Мисо суп'],
        totalAmount: 1200,
        status: OrderStatus.COOKING,
        createdAt: new Date('2024-03-10T15:00:00'),
        duration: 30,
    },
    {
        id: 3,
        customerName: 'Петр Иванов',
        items: ['Бургер', 'Картофель фри', 'Милкшейк'],
        totalAmount: 750,
        status: OrderStatus.PENDING,
        createdAt: new Date('2024-03-10T15:15:00'),
        duration: 0,
    },
    {
        id: 4,
        customerName: 'Мария Козлова',
        items: ['Пицца Пепперони', 'Салат Цезарь', 'Sprite'],
        totalAmount: 1500,
        status: OrderStatus.DELIVERY,
        createdAt: new Date('2024-03-10T14:00:00'),
        duration: 60,
    },
    {
        id: 5,
        customerName: 'Алексей Смирнов',
        items: ['Роллы Филадельфия', 'Роллы Калифорния'],
        totalAmount: 2200,
        status: OrderStatus.CANCELLED,
        createdAt: new Date('2024-03-10T13:30:00'),
        duration: 15,
    },
];
