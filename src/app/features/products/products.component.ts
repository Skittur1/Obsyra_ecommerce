import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from './services/product.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  
  products = signal<Product[]>([]);
  isLoading = signal(true);
  
  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe({
      next: (data) => {
        // Simulating a larger collection by duplicating the mock data slightly
        this.products.set([...data, ...data]);
        this.isLoading.set(false);
      }
    });
  }
}
