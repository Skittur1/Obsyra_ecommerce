import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductService } from '../products/services/product.service';
import { Product } from '../../core/models/product.model';
import { FeatureStripComponent } from '../../shared/components/feature-strip/feature-strip.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent, FeatureStripComponent, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  
  // Using Signals for local state management (Modern Angular Best Practice)
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(true);

  // Stats signals
  statConcentration = signal(0);
  statSillage = signal(0);
  statHarvest = signal(0);

  private statsObserver: IntersectionObserver | null = null;

  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load products', err);
        this.isLoading.set(false);
      }
    });

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      setTimeout(() => {
        const statsEl = document.querySelector('.hero-stats');
        if (statsEl) {
          this.statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              this.animateStats();
              this.statsObserver?.disconnect();
            }
          }, { threshold: 0.1 });
          this.statsObserver.observe(statsEl);
        }
      }, 500); // small delay to ensure DOM is ready
    }
  }

  ngOnDestroy() {
    if (this.statsObserver) {
      this.statsObserver.disconnect();
    }
  }

  private animateStats() {
    const duration = 600;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutExpo)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      this.statConcentration.set(Math.floor(ease * 34));
      this.statSillage.set(Math.floor(ease * 48));
      this.statHarvest.set(Math.floor(ease * 500));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }
}
