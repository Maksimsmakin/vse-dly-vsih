export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  subcategory: string;
  discount?: number;
  description: string;
  brand: string;
  inStock: boolean;
  specifications?: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: number;
  name: string;
  productCount: number;
}
