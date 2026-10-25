import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  template: `
    <!-- Section 1: Announcement Bar -->
    <div class="announcement-bar">
      COMPLIMENTARY WHITE-GLOVE CLIMATE-CONTROLLED TRANSIT ON ALL ALLOTMENTS &bull; COMPLIMENTARY 2ML EXTRAIT DISCOVERY VIAL INCLUDED
    </div>

    <!-- Section 2: Header / Nav -->
    <header class="app-header">
      <div class="header-container container">
        
        <!-- Logo (Left) -->
        <a routerLink="/" class="logo-lockup">
          <span class="logo-text heading-md">OBSYRA</span>
          <span class="logo-subtext">HAUTE PARFUMERIE &middot; PARIS / GRASSE</span>
        </a>

        <!-- Desktop Navigation (Center) -->
        <nav class="main-nav">
          <a routerLink="/" class="nav-link" [routerLinkActiveOptions]="{exact: true}" routerLinkActive="active">HOME</a>
          <a routerLink="/products" class="nav-link" routerLinkActive="active">COLLECTIONS</a>
          <a routerLink="/products/noir-edp" class="nav-link" routerLinkActive="active">SIGNATURE NOIR</a>
          <a routerLink="/scent-finder" class="nav-link" routerLinkActive="active">SCENT FINDER</a>
          <a routerLink="/about" class="nav-link" routerLinkActive="active">ATELIER STORY</a>
        </nav>

        <!-- Actions (Right) -->
        <div class="header-actions">
          <button class="action-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          
          <a routerLink="/vault" class="action-btn icon-with-label" aria-label="Vault">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <span>VAULT</span>
          </a>
          
          <a routerLink="/wishlist" class="action-btn" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </a>
          
          <a routerLink="/cart" class="action-btn cart-btn" aria-label="Shopping Bag">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span *ngIf="cartService.totalItems() > 0" class="cart-badge" [@popAnimation]="cartService.totalItems()">{{ cartService.totalItems() }}</span>
          </a>
          
          <a routerLink="/account" class="action-btn avatar-btn" aria-label="User Account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .announcement-bar {
      background-color: var(--color-surface-high, #2a2a2d);
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-body);
      font-size: 11px;
      letter-spacing: 0.12em;
      color: var(--color-text-secondary, #9C9CA3);
      text-transform: uppercase;
      padding: 0 1rem;
      text-align: center;
    }

    .app-header { 
      background-color: var(--color-surface-dim, #050507);
      border-bottom: 1px solid rgba(255,255,255,0.08); 
      position: sticky; 
      top: 0; 
      z-index: 100; 
    }
    
    .header-container { 
      height: 80px;
      display: flex; 
      align-items: center; 
      justify-content: space-between; 
    }
    
    /* Logo Lockup */
    .logo-lockup { 
      display: flex;
      flex-direction: column;
      text-decoration: none; 
      color: var(--color-on-surface);
    }
    .logo-text { 
      letter-spacing: 0.25em;
      line-height: 1;
      margin-bottom: 4px;
    }
    .logo-subtext {
      font-family: var(--font-body);
      font-size: 9px;
      letter-spacing: 0.14em;
      color: var(--color-primary);
      text-transform: uppercase;
    }
    
    /* Navigation */
    .main-nav { 
      display: flex; 
      gap: 2rem; 
    }
    .nav-link { 
      font-family: var(--font-body);
      font-size: 13px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-text-secondary, #9C9CA3); 
      text-decoration: none; 
      transition: color 150ms ease; 
      position: relative;
    }
    .nav-link:hover { color: var(--color-on-surface); }
    .nav-link.active {
      color: var(--color-primary);
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--color-primary);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 150ms ease;
    }
    .nav-link:hover::after, .nav-link.active::after {
      transform: scaleX(1);
    }
    
    /* Actions */
    .header-actions { 
      display: flex; 
      align-items: center; 
      gap: 1.25rem; 
    }
    .action-btn {
      background: transparent;
      border: none;
      color: var(--color-on-surface);
      cursor: pointer;
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: color 150ms ease;
    }
    .action-btn:hover {
      color: var(--color-primary);
    }
    
    .icon-with-label {
      gap: 6px;
      font-family: var(--font-body);
      font-size: 11px;
      letter-spacing: 0.12em;
    }
    
    .avatar-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid var(--color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
    }
    
    .cart-btn {
      position: relative;
    }
    .cart-badge { 
      position: absolute; 
      top: -6px; 
      right: -8px; 
      background-color: var(--color-primary); 
      color: var(--color-surface-dim); 
      font-family: var(--font-body);
      font-size: 9px; 
      font-weight: 700; 
      min-width: 16px; 
      height: 16px; 
      padding: 0 4px; 
      border-radius: var(--radius-full); 
      display: flex; 
      align-items: center; 
      justify-content: center; 
    }

    @media (max-width: 1024px) {
      .main-nav { display: none; }
    }
  `],
  animations: [
    trigger('popAnimation', [
      transition('* => *', [
        animate('250ms cubic-bezier(0.25, 1, 0.5, 1)', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.15)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HeaderComponent {
  cartService = inject(CartService);
}
