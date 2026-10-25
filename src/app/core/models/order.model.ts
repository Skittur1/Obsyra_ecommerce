import { CartItem } from './cart.model';

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED';
  createdAt: string;
  shippingAddress: {
    fullName: string;
    addressLine1: string;
    city: string;
    zipCode: string;
  };
}
