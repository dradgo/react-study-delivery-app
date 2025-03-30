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
                    { label: 'Small', value: 'small' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Large', value: 'large' },
                ],
            },
            {
                name: 'Toppings',
                options: [
                    { label: 'Mushrooms', value: 'mushrooms' },
                    { label: 'Pepperoni', value: 'pepperoni' },
                    { label: 'Onions', value: 'onions' },
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
                    { label: 'White Rice', value: 'white_rice' },
                    { label: 'Brown Rice', value: 'brown_rice' },
                ],
            },
            {
                name: 'Toppings',
                options: [
                    { label: 'Avocado', value: 'avocado' },
                    { label: 'Cucumber', value: 'cucumber' },
                    { label: 'Seaweed', value: 'seaweed' },
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
                    { label: 'Sesame Seed', value: 'sesame_seed' },
                    { label: 'Whole Wheat', value: 'whole_wheat' },
                ],
            },
            {
                name: 'Toppings',
                options: [
                    { label: 'Lettuce', value: 'lettuce' },
                    { label: 'Tomato', value: 'tomato' },
                    { label: 'Onion', value: 'onion' },
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
                    { label: 'Ranch', value: 'ranch' },
                    { label: 'Caesar', value: 'caesar' },
                    { label: 'Blue Cheese', value: 'blue_cheese' },
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
                    { label: 'Alfredo', value: 'alfredo' },
                    { label: 'Pesto', value: 'pesto' },
                    { label: 'Garlic', value: 'garlic' },
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
                    { label: 'Olive Oil', value: 'olive_oil' },
                    { label: 'Feta', value: 'feta' },
                    { label: 'Lemon Juice', value: 'lemon_juice' },
                ],
            },
        ],
    },
];
