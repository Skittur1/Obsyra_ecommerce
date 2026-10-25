import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { Order } from '../../../core/models/order.model';
import { CartItem } from '../../../core/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  processOrder(checkoutData: any, items: CartItem[], total: number): Observable<Order> {
    // Simulate network delay and backend logic
    if (checkoutData.payment.cardNumber.includes('0000')) {
      return throwError(() => new Error('Payment declined: Invalid card.'));
    }

    const mockOrder: Order = {
      id: 'ORD-' + Math.floor(Math.random() * 1000000),
      items,
      totalAmount: total,
      status: 'PROCESSING',
      createdAt: new Date().toISOString(),
      shippingAddress: checkoutData.shipping
    };

    return of(mockOrder).pipe(delay(1500));
  }
}
