export type NutritionInfo = {
    fat: string;
    sugar: string;
    protein: string;
    calories: string;
};

export type MenuItem = {
    id: number;
    name: string;
    image: string;
    price: string;
    nutrition: NutritionInfo;
    available: boolean;
    category: string;
};
