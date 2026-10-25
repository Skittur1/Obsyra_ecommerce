export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isNew?: boolean;
}
