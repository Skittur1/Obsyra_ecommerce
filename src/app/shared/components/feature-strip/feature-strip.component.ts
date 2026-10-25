import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-feature-strip',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="bottom-features border-t border-subtle bg-surface-lowest">
      <div class="container feature-grid py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="feature-item text-center hover-lift" appScrollReveal [staggerIndex]="1">
          <div class="feature-icon mb-4 flex justify-center text-primary">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h4 class="label-lg text-white mb-2 tracking-widest uppercase">100% Grasse Distillate</h4>
          <p class="body-sm text-muted">Sourced exclusively from certified organic terroir harvests.</p>
        </div>
        <div class="feature-item text-center hover-lift" appScrollReveal [staggerIndex]="2">
          <div class="feature-icon mb-4 flex justify-center text-primary">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </div>
          <h4 class="label-lg text-white mb-2 tracking-widest uppercase">Artisanal Flacons</h4>
          <p class="body-sm text-muted">Hand-blown obsidian glass with hand-chiseled brass caps.</p>
        </div>
        <div class="feature-item text-center hover-lift" appScrollReveal [staggerIndex]="3">
          <div class="feature-icon mb-4 flex justify-center text-primary">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <h4 class="label-lg text-white mb-2 tracking-widest uppercase">Discreet Wax-Sealed Transit</h4>
          <p class="body-sm text-muted">Climate-stabilized chamber shipping with private seal.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .border-subtle { border-color: rgba(255,255,255,0.08); }
    .text-muted { color: var(--color-text-secondary, #9C9CA3); }
    .text-white { color: var(--color-on-surface, #FFFFFF); }
    .text-primary { color: var(--color-primary); }
    .flex { display: flex; }
    .justify-center { justify-content: center; }
    .bg-surface-lowest { background-color: var(--color-surface-lowest, #0B0C10); }
    .hover-lift {
      transition: transform 150ms ease, box-shadow 150ms ease;
      will-change: transform;
    }
    .hover-lift:hover {
      transform: translateY(-4px);
    }
  `]
})
export class FeatureStripComponent {}
