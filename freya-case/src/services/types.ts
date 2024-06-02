export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: any[];
    creationAt: string;
    updatedAt: string;
    category: Category;
    isFavorited: boolean;
}

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}