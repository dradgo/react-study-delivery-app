import { MenuItem } from 'src/types/menu';

export const dishesMock: MenuItem[] = [
    {
        id: 1,
        name: 'Margherita Pizza',
        image: 'https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067',
        price: '$12.99',
        nutrition: { fat: '10g', sugar: '5g', protein: '15g', calories: '300kcal' },
        available: false,
        category: 'Пицца',
        customizations: [
            {
                name: 'Size',
                options: [
                    { label: 'Small', value: 'small', extraPrice: 1.5 },
                    { label: 'Medium', value: 'medium', extraPrice: 2.5 },
                    { label: 'Large', value: 'large', extraPrice: 3.5 },
                ],
            },
            {
                name: 'Toppings',
                options: [
                    { label: 'Mushrooms', value: 'mushrooms', extraPrice: 1.5 },
                    { label: 'Pepperoni', value: 'pepperoni', extraPrice: 2.5 },
                    { label: 'Onions', value: 'onions', extraPrice: 3.5 },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Sushi Platter',
        image: 'https://static.sushiwok.ru/img/a0e48307a71a9a041c11822a2ccfd4b8',
        price: '$22.50',
        nutrition: { fat: '8g', sugar: '3g', protein: '20g', calories: '250kcal' },
        available: false,
        category: 'Суши',
        customizations: [
            {
                name: 'Rice',
                options: [
                    { label: 'White Rice', value: 'white_rice', extraPrice: 0 },
                    { label: 'Brown Rice', value: 'brown_rice', extraPrice: 1.5 },
                ],
            },
            {
                name: 'Toppings',
                options: [
                    { label: 'Avocado', value: 'avocado', extraPrice: 1.5 },
                    { label: 'Cucumber', value: 'cucumber', extraPrice: 2.5 },
                    { label: 'Seaweed', value: 'seaweed', extraPrice: 3.5 },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'Cheeseburger',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGYQN-UuJ34jLq7YIOfkq9__svkPzrmPa1w&s',
        price: '$9.99',
        nutrition: { fat: '20g', sugar: '7g', protein: '25g', calories: '450kcal' },
        available: true,
        category: 'Бургеры',
        customizations: [
            {
                name: 'Bun',
                options: [
                    { label: 'Sesame Seed', value: 'sesame_seed', extraPrice: 1.5 },
                    { label: 'Whole Wheat', value: 'whole_wheat', extraPrice: 2.5 },
                ],
            },
            {
                name: 'Toppings',
                options: [
                    { label: 'Lettuce', value: 'lettuce', extraPrice: 1.5 },
                    { label: 'Tomato', value: 'tomato', extraPrice: 2.5 },
                    { label: 'Onion', value: 'onion', extraPrice: 3.5 },
                ],
            },
        ],
    },
    {
        id: 4,
        name: 'Caesar Salad',
        image: 'https://menunedeli.ru/wp-content/uploads/2022/07/41322293-5B97-451F-886E-2522AB91F67B-1200x948.jpeg',
        price: '$8.99',
        nutrition: { fat: '8g', sugar: '2g', protein: '12g', calories: '220kcal' },
        available: true,
        category: 'Салаты',
        customizations: [
            {
                name: 'Dressing',
                options: [
                    { label: 'Ranch', value: 'ranch', extraPrice: 1.5 },
                    { label: 'Caesar', value: 'caesar', extraPrice: 2.5 },
                    { label: 'Blue Cheese', value: 'blue_cheese', extraPrice: 1.5 },
                ],
            },
        ],
    },
    {
        id: 5,
        name: 'Pasta Carbonara',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQi1Uh4qPk59bh1A2ze9ZBMfIKwB9ZQqd_kw&s',
        price: '$14.99',
        nutrition: { fat: '15g', sugar: '3g', protein: '18g', calories: '380kcal' },
        available: true,
        category: 'Паста',
        customizations: [
            {
                name: 'Sauce',
                options: [
                    { label: 'Alfredo', value: 'alfredo', extraPrice: 1.5 },
                    { label: 'Pesto', value: 'pesto', extraPrice: 1.5 },
                    { label: 'Garlic', value: 'garlic', extraPrice: 0.5 },
                ],
            },
        ],
    },
    {
        id: 6,
        name: 'Greek Salad',
        image: 'https://www.onehappydish.com/wp-content/uploads/2023/01/greek-salad.jpg',
        price: '$7.99',
        nutrition: { fat: '12g', sugar: '4g', protein: '8g', calories: '180kcal' },
        available: true,
        category: 'Салаты',
        customizations: [
            {
                name: 'Dressing',
                options: [
                    { label: 'Olive Oil', value: 'olive_oil', extraPrice: 1.5 },
                    { label: 'Feta', value: 'feta', extraPrice: 1.5 },
                    { label: 'Lemon Juice', value: 'lemon_juice', extraPrice: 2.5 },
                ],
            },
        ],
    },
];
