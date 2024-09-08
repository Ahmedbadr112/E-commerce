import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../core/servcies/order.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit, OnDestroy {
  cartId: string | null = '';
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _OrderService = inject(OrderService);
  private readonly _Router = inject(Router);
  private readonly _Toaster = inject(ToastrService);

  orders: FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    city: new FormControl(null, [Validators.required]),
  });

  // Subscriptions
  private routeSubscription!: Subscription;
  private orderSubscription!: Subscription;

  orderSubmit(): void {
    if (this.orders.valid && this.cartId) {
      this.orderSubscription = this._OrderService.checkout(this.cartId, this.orders.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.status === 'success') {
            this._Toaster.success('Checkout completed successfully');
            window.open(res.session.url);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ngOnInit(): void {
    this.routeSubscription = this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.cartId = res.get('id');
        console.log(this.cartId);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from route and order service subscriptions
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    if (this.orderSubscription) {
      this.orderSubscription.unsubscribe();
    }
  }
}
