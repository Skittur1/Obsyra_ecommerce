import { Component, Input, inject, signal } from '@angular/core';
import { CurrencyPipe, NgClass, NgIf, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgClass, RouterLink, SlicePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  animations: [
    trigger('popAnimation', [
      transition('* => *', [
        animate('300ms cubic-bezier(0.25, 1, 0.5, 1)', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.2)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  private cartService = inject(CartService);

  isWishlisted = signal(false);
  wishlistAnimState = signal(0);
  cartAnimState = signal(0);

  toggleWishlist(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isWishlisted.update(val => !val);
    this.wishlistAnimState.update(val => val + 1); // trigger pop
  }

  addToCart(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.product.inStock) {
      this.cartService.addToCart(this.product);
      this.cartAnimState.update(val => val + 1); // trigger pop
    }
  }
}
