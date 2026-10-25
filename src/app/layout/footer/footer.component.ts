import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="app-footer">
      <div class="container footer-content">
        <div class="footer-grid">
          
          <!-- Brand Block -->
          <div class="footer-brand">
             <div class="logo-lockup mb-4">
                <span class="logo-text heading-md">OBSYRA</span>
                <span class="logo-subtext">HAUTE PARFUMERIE &middot; SALON PRIVÉ</span>
             </div>
             <p class="brand-desc body-sm text-muted mb-6">
                The rare, sensual world of artisanal haute parfumerie. 
                Nocturnal intimacy paired with contemporary curation.
             </p>
             
             <div class="newsletter-block">
                <h4 class="label-md gold-text mb-2">JOIN THE OLFACTORY CIRCLE</h4>
                <div class="input-group">
                  <input type="email" class="form-input" placeholder="Your email address" aria-label="Email Address">
                  <button class="btn btn-primary btn-sm">ENROLL</button>
                </div>
             </div>
          </div>
          
          <!-- Links Columns -->
          <div class="footer-links-wrapper">
            <div class="footer-col">
              <h4 class="label-md gold-text mb-4">HAUTE COLLECTIONS</h4>
              <a routerLink="/products/noir-edp" class="footer-link">Signature Noir</a>
              <a routerLink="/products" class="footer-link">Amber Imperial</a>
              <a routerLink="/products" class="footer-link">Rare Florals</a>
              <a routerLink="/products" class="footer-link">Resin & Oud Exclusives</a>
              <a routerLink="/products" class="footer-link">Discovery Sets</a>
            </div>
            
            <div class="footer-col">
              <h4 class="label-md gold-text mb-4">BESPOKE SERVICES</h4>
              <a routerLink="/services" class="footer-link">Salon Consultation</a>
              <a routerLink="/services" class="footer-link">Bespoke Formulation</a>
              <a routerLink="/services" class="footer-link">Flacon Monogramming</a>
              <a routerLink="/services" class="footer-link">Private Cask Reserves</a>
              <a routerLink="/services" class="footer-link">Olfactory Profiling</a>
            </div>

            <div class="footer-col">
              <h4 class="label-md gold-text mb-4">CONCIERGE</h4>
              <a routerLink="/account" class="footer-link">Private Vault Access</a>
              <a routerLink="/concierge" class="footer-link">White-Glove Courier</a>
              <a routerLink="/concierge" class="footer-link">Climate Storage Care</a>
              <a routerLink="/concierge" class="footer-link">VIP Client Liaison</a>
              <a routerLink="/concierge" class="footer-link">Allotment Allocations</a>
            </div>

            <div class="footer-col">
              <h4 class="label-md gold-text mb-4">PROVENANCE</h4>
              <a routerLink="/provenance" class="footer-link">Grasse Farmer Charter</a>
              <a routerLink="/provenance" class="footer-link">Sourcing Ethics</a>
              <a routerLink="/provenance" class="footer-link">Authentication Ledger</a>
              <a routerLink="/provenance" class="footer-link">Certificate of Batch</a>
              <a routerLink="/legal" class="footer-link">Legal & Privacy</a>
            </div>
          </div>
          
        </div>
        
        <div class="footer-bottom">
          <p class="copyright label-sm text-muted">&copy; 2026 OBSYRA HAUTE PARFUMERIE. ALL RIGHTS RESERVED.</p>
          <div class="legal-links">
            <a routerLink="/legal" class="label-sm text-muted">PRIVACY POLICY</a>
            <span class="text-muted">&middot;</span>
            <a routerLink="/legal" class="label-sm text-muted">TERMS OF ALLOTMENT</a>
            <span class="text-muted">&middot;</span>
            <a routerLink="/legal" class="label-sm text-muted">CERTIFICATE OF AUTHENTICITY</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .gold-text { color: var(--color-primary); }
    .text-muted { color: var(--color-text-secondary, #9C9CA3); }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }

    .app-footer {
      background-color: var(--color-surface-dim, #050507);
      border-top: 1px solid rgba(255,255,255,0.08);
      margin-top: auto;
    }
    
    .footer-content {
      padding-top: 4rem;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr 2.5fr;
      gap: 4rem;
      margin-bottom: 4rem;
    }
    
    /* Brand Block */
    .logo-lockup { 
      display: flex;
      flex-direction: column;
      color: var(--color-on-surface);
    }
    .logo-text { 
      letter-spacing: 0.25em;
      line-height: 1;
      margin-bottom: 4px;
    }
    .logo-subtext {
      font-family: var(--font-body);
      font-size: 11px;
      letter-spacing: 0.14em;
      color: var(--color-primary);
      text-transform: uppercase;
    }
    
    .brand-desc {
      max-width: 280px;
      line-height: 1.6;
    }
    
    /* Form */
    .input-group {
      display: flex;
      gap: 0.5rem;
    }
    .form-input {
      flex: 1;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      color: var(--color-on-surface);
      font-family: var(--font-body);
      font-size: 13px;
      outline: none;
      transition: border-color 150ms ease;
    }
    .form-input:focus {
      border-color: var(--color-primary);
    }
    .btn-sm {
      padding: 0.5rem 1rem;
      font-size: 11px;
    }
    
    /* Links Wrapper */
    .footer-links-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
    
    .footer-col {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .footer-link {
      font-family: var(--font-body);
      font-size: 13px;
      color: var(--color-text-secondary, #9C9CA3);
      text-decoration: none;
      transition: color 150ms ease;
    }
    .footer-link:hover {
      color: var(--color-on-surface);
    }
    
    /* Bottom Bar */
    .footer-bottom {
      padding: 2rem 0;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .legal-links {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .legal-links a {
      text-decoration: none;
      transition: color 150ms ease;
    }
    .legal-links a:hover {
      color: var(--color-on-surface);
    }
    
    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr; }
      .footer-links-wrapper { grid-template-columns: repeat(2, 1fr); }
    }
    
    @media (max-width: 768px) {
      .footer-links-wrapper { grid-template-columns: 1fr; }
      .footer-bottom { flex-direction: column; text-align: center; justify-content: center; }
      .legal-links { justify-content: center; flex-wrap: wrap; }
    }
  `]
})
export class FooterComponent {}
