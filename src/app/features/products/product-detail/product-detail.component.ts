import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/product.model';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { FeatureStripComponent } from '../../../shared/components/feature-strip/feature-strip.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent, FeatureStripComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<Product | null>(null);
  isLoading = signal(true);
  quantity = signal(1);
  crossSellProducts = signal<Product[]>([]);
  activeTab = signal('pyramid');

  // Static fallback values for Bug 8 & Bug 7 flags
  // These fields don't exist on the Product model yet
  selectedVolume = signal('100ml');
  engravingText = signal('');

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isLoading.set(true);
        this.productService.getProductById(id).subscribe({
          next: (prod) => {
            this.product.set(prod || null);
            this.isLoading.set(false);
          }
        });
      }
    });

    // Fetch cross-sell products (Bug 11)
    this.productService.getFeaturedProducts().subscribe(products => {
      this.crossSellProducts.set(products.slice(0, 3));
    });
  }

  getDiscountPercent(price: number, originalPrice: number): number {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  }

  increment() {
    this.quantity.update(q => q + 1);
  }

  decrement() {
    this.quantity.update(q => (q > 1 ? q - 1 : 1));
  }

  addToCart() {
    const prod = this.product();
    if (prod && prod.inStock) {
      for(let i=0; i < this.quantity(); i++) {
         // In a real app, we would pass engraving/size metadata here
         this.cartService.addToCart(prod);
      }
      this.quantity.set(1);
    }
  }

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
  }
}
