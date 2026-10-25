import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export default class CheckoutComponent {
  cartService = inject(CartService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  checkoutForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    apartment: [''],
    city: ['', Validators.required],
    postalCode: ['', Validators.required],
    country: ['IN', Validators.required],
    cardName: ['', Validators.required],
    cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    expiry: ['', Validators.required],
    cvc: ['', Validators.required]
  });

  isProcessing = false;

  onSubmit() {
    if (this.checkoutForm.valid && this.cartService.cartItems().length > 0) {
      this.isProcessing = true;
      // Simulate API call for secure processing
      setTimeout(() => {
        this.cartService.clearCart();
        this.isProcessing = false;
        alert('Allotment Secured Successfully. Your private tracking cipher will be emailed shortly.');
        this.router.navigate(['/']);
      }, 1500);
    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }
}
