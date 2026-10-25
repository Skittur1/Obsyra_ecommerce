import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Product } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts: Product[] = [
    {
      id: 'smoky-intense',
      name: 'Smoky Intense',
      description: 'Bourbon Vanilla · Smoked Oud · Sandalwood',
      price: 1999.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAApNpiADC6IaYvVxrrXovOf-WUS5kFafSJJ0HRcf7-fPONVwoDNwP9w2AtY6LNgpPo4buJUm2VrjxJgePC2F63PtEcutZ2uOunbNtp_wcrv-suhJdq6cEPOKzOoVk6ogrosJahEhhS1g-zGk6HqOiYAYuuzXlfzyd8E3GKFjommq8HzBbAhxpsjymtPD5caWO3a0V6H3ZHvaMr-gOyhgEtmf9Bcc_4Kgh4DgGsdEJ_TqKGCpn3-PoNFg',
      category: 'Smoked Amber',
      rating: 4.9,
      reviewsCount: 184,
      inStock: true,
      isNew: true
    },
    {
      id: 'wild-fire',
      name: 'Wild Fire',
      description: 'Blue Ozone · Frosted Cedar · Cardamom',
      price: 1999.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiulzNz-es8hyRZ8lqOI7CT9LJFdfzMnpVv1yYtEUArwCbYFHF_VglKeZrousUQepWQ84-hW3X19LZwoL5Zd-F77Z0yv_Z9bvokAdHIuHmygDSh2kBSlARXIASsjL8VafQNqC39qVxxhr25nGCOxZT-ncOqedBax8HA4i_hFTGqyGjX6KYGvbROoOUSj0jHS9MaFku0nHaOslMvFjXIf25jNYzQ4Gw70jMJxALLTgTtZSFaRLu8MSfxA',
      category: 'Frost & Electric',
      rating: 4.8,
      reviewsCount: 210,
      inStock: true
    },
    {
      id: 'noir-reserve',
      name: 'Noir Reserve',
      description: 'Damask Rose · Crimson Amber · Incense',
      price: 2199.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5revzN8YmCYc3YsJAHpc65V44Lf1EF9mqK3pcLtmkS-UM8YFY5mCrBPL17XTFEEFJZKnr4mRGz62JgDWNU0YogbYtId3fnvKn8DJ1xJHJnfX3Yb-9G9grJNGxI690bxTyuyTqmmBhOIb65jyAIugsayJB0Fid4FiHtj20BUhG-ul2CJ0E26QUblfhmZ3-Oe2_tiRoc9gNt5IVz_LqO9rteJ3VEofzvECbirSpuP1lCMDCu0kVLgR0Vw',
      category: 'Private Reserve',
      rating: 5.0,
      reviewsCount: 340,
      inStock: true
    },
    {
      id: 'velvet-santal',
      name: 'Velvet Santal',
      description: 'White Iris · Australian Sandalwood · Bergamot',
      price: 2499.00,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvvbwJHbCQTJJflRf6WwYeFcwc5D_hvXIS6qEIq1o9s8V3ahMfmOf9_wLHSH-RNzL92oXIEorcNZTuB4rOvzg5qwCAG45FODM4d52t2eNYBfkj1jyV0hnfx2_4TKlQMGe0eyKafxWgbvDsZL_-l1XBnyjVF3FFK6wp_-55jebiq0Hx9GLZPg-8DRdnycAoU4XSMTH9GXOps4sQDH2-G_7y-4SN5oi8OHNRE_-Y4AVHCJCV1aE7mTMo1Q',
      category: 'Rare Terroir',
      rating: 4.9,
      reviewsCount: 98,
      inStock: true
    }
  ];

  getFeaturedProducts(): Observable<Product[]> {
    return of(this.mockProducts).pipe(delay(800));
  }

  getProductById(id: string): Observable<Product | undefined> {
    const product = this.mockProducts.find(p => p.id === id);
    return of(product).pipe(delay(500));
  }
}
