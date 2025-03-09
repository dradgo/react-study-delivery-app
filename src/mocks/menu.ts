import { MenuItem } from "src/types/menu";

export const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Пицца Маргарита",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    price: "799",
    nutrition: { fat: "10g", sugar: "5g", protein: "15g", calories: "300kcal" },
    available: true,
    category: "Пицца"
  },
  {
    id: 2,
    name: "Суши сет Премиум",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    price: "1450",
    nutrition: { fat: "8g", sugar: "3g", protein: "20g", calories: "250kcal" },
    available: true,
    category: "Суши"
  },
  {
    id: 3,
    name: "Чизбургер Классический",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    price: "459",
    nutrition: { fat: "20g", sugar: "7g", protein: "25g", calories: "450kcal" },
    available: true,
    category: "Бургеры"
  },
  {
    id: 4,
    name: "Салат Цезарь",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
    price: "550",
    nutrition: { fat: "8g", sugar: "2g", protein: "12g", calories: "220kcal" },
    available: true,
    category: "Салаты"
  },
  {
    id: 5,
    name: "Паста Карбонара",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
    price: "720",
    nutrition: { fat: "15g", sugar: "3g", protein: "18g", calories: "380kcal" },
    available: true,
    category: "Паста"
  }
];

export const mockCategories = [
  "Пицца",
  "Суши",
  "Бургеры",
  "Салаты",
  "Паста",
  "Напитки",
  "Десерты"
]; 