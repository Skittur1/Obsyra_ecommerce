import { Directive, ElementRef, inject, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  
  @Input() staggerIndex: number = 0;

  private static observer: IntersectionObserver | null = null;
  private static observedElements = new Map<Element, ScrollRevealDirective>();

  ngOnInit() {
    // Apply initial hidden class and stagger
    this.el.nativeElement.classList.add('reveal-hidden');
    
    if (this.staggerIndex > 0) {
      // Cap stagger at 6 items
      const index = Math.min(this.staggerIndex, 6);
      this.el.nativeElement.style.setProperty('--stagger-index', index.toString());
    }

    // Initialize observer once
    if (!ScrollRevealDirective.observer && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      ScrollRevealDirective.observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add('is-revealed');
            observer.unobserve(target); // Only reveal once
            ScrollRevealDirective.observedElements.delete(target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      });
    }

    if (ScrollRevealDirective.observer) {
      ScrollRevealDirective.observer.observe(this.el.nativeElement);
      ScrollRevealDirective.observedElements.set(this.el.nativeElement, this);
    } else {
      // Fallback if no IntersectionObserver (e.g. very old browsers or SSR)
      this.el.nativeElement.classList.add('is-revealed');
    }
  }

  ngOnDestroy() {
    if (ScrollRevealDirective.observer && ScrollRevealDirective.observedElements.has(this.el.nativeElement)) {
      ScrollRevealDirective.observer.unobserve(this.el.nativeElement);
      ScrollRevealDirective.observedElements.delete(this.el.nativeElement);
    }
  }
}
