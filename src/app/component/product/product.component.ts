import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/servcies/product.service';
import { IProduct } from '../../core/interface/iproduct';
import { Subscription } from 'rxjs';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { TermPipe } from '../../core/pipes/term.pipe';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../core/servcies/cart.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, SearchPipe,TermPipe,CurrencyPipe,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit, OnDestroy {
  private readonly _product = inject(ProductService); 
  private readonly _CartService = inject(CartService);
  private readonly _Toaster = inject(ToastrService);
  productList: IProduct[] = [];
  text: string = '';
  productSubscription!: Subscription;
  ngOnInit(): void {
    this.productSubscription = this._product.getAllProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.productList = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  } 
  addToCart(id: string): void {
    this._CartService.addCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._Toaster.success('product added successfully');
        this._CartService.cartNumber.set(res.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }
}
