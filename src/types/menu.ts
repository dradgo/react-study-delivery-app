export interface CustomizationOption {
    label: string;
    value: string;
    extraPrice: number;
}

export type NutritionInfo = {
    fat: string;
    sugar: string;
    protein: string;
    calories: string;
};

export type MenuItem = {
    id: number;
    name: string;
    restaurantName?: string;
    image: string;
    price: string;
    nutrition: NutritionInfo;
    available: boolean;
    category: string;
    customizations?: {
        name: string;
        options: CustomizationOption[];
    }[];
};
