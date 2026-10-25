import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Global cart state using Signals
  private cartItemsSignal = signal<CartItem[]>([]);

  // Computed signals for derived state
  readonly cartItems = this.cartItemsSignal.asReadonly();
  
  readonly totalItems = computed(() => 
    this.cartItemsSignal().reduce((acc, item) => acc + item.quantity, 0)
  );

  readonly subtotal = computed(() => 
    this.cartItemsSignal().reduce((acc, item) => acc + (item.product.price * item.quantity), 0)
  );

  addToCart(product: Product, quantity: number = 1) {
    this.cartItemsSignal.update(items => {
      const existingItem = items.find(item => item.product.id === product.id);
      if (existingItem) {
        return items.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...items, { product, quantity }];
    });
  }

  removeFromCart(productId: string) {
    this.cartItemsSignal.update(items => items.filter(item => item.product.id !== productId));
  }

  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.cartItemsSignal.update(items => 
      items.map(item => item.product.id === productId ? { ...item, quantity } : item)
    );
  }

  clearCart() {
    this.cartItemsSignal.set([]);
  }
}
