import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { ProductService } from '../products/services/product.service';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { FeatureStripComponent } from '../../shared/components/feature-strip/feature-strip.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent, FeatureStripComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export default class CartComponent implements OnInit {
  cartService = inject(CartService);
  private productService = inject(ProductService);

  crossSellProducts = signal<Product[]>([]);

  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe(products => {
      this.crossSellProducts.set(products.slice(0, 3));
    });
  }

  increment(productId: string, currentQuantity: number) {
    this.cartService.updateQuantity(productId, currentQuantity + 1);
  }

  decrement(productId: string, currentQuantity: number) {
    if (currentQuantity > 1) {
      this.cartService.updateQuantity(productId, currentQuantity - 1);
    } else {
      this.cartService.removeFromCart(productId);
    }
  }

  remove(productId: string) {
    this.cartService.removeFromCart(productId);
  }
}
