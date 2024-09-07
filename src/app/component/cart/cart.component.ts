import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/servcies/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICart } from '../../core/interface/ICart';
import { RouterLink } from '@angular/router';
import {
  SweetAlert2LoaderService,
  SweetAlert2Module,
} from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, SweetAlert2Module],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  private readonly _CartService = inject(CartService);
  private readonly _Toaster = inject(ToastrService);

  cartDetalis: ICart = {} as ICart;

  ngOnInit(): void {
    this._CartService.getCart().subscribe({
      next: (res) => {
        console.log(res.data);
        this.cartDetalis = res.data;
      },
    });
  }
  removeItem(id: string): void {
    this._CartService.deleteCartItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetalis = res.data;
      },
    });
  }
  updateCount(id: string, count: number): void {
    if (count > 0) {
      this._CartService.updateCart(id, count).subscribe({
        next: (res) => {
          console.log(res.data);
          this.cartDetalis = res.data;
        },
      });
    } else {
      this.removeItem(id);
      this._Toaster.success('item removed successfully');
    }
  }
  clearCart(id: string): void {
    this._CartService.clearCart().subscribe({
      next: (res) => {
        console.log(res);
        if (res.message === 'success') {
          this.cartDetalis = {} as ICart;
          this._Toaster.success('cart cleard successfully');
          this._CartService.cartNumber.set(0);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
