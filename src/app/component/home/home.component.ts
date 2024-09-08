import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { ICategories } from '../../core/interface/icategories';
import { IProduct } from '../../core/interface/iproduct';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { TermPipe } from '../../core/pipes/term.pipe';
import { CategoriesService } from '../../core/servcies/categories.service';
import { ProductService } from '../../core/servcies/product.service';
import { CartService } from './../../core/servcies/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchPipe,
    FormsModule,
    CarouselModule,
    RouterLink,
    RouterModule,
    TermPipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly _product = inject(ProductService);
  private readonly _Categories = inject(CategoriesService);
  private readonly _CartService = inject(CartService);
  private readonly _Toaster = inject(ToastrService);
  private readonly _Spinner = inject(NgxSpinnerService);

  productList: IProduct[] = [];
  categoriesList: ICategories[] = [];
  text: string = '';

  // Subscriptions
  private categoriesSubscription!: Subscription;
  private productSubscription!: Subscription;
  private cartSubscription!: Subscription;

  customOptionsCat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 },
    },
    nav: true,
  };

  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
  };

  ngOnInit(): void {
    this._Spinner.show('loading-1');

    this.categoriesSubscription = this._Categories.getAllCategories().subscribe({
      next: (res) => {
        console.log(res.data);
        this.categoriesList = res.data;
        this._Spinner.hide('loading-1');
      },
      error: (err) => console.log(err),
    });

    this.productSubscription = this._product.getAllProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.productList = res.data;
      },
      error: (err) => console.log(err),
    });
  }

  addToCart(id: string): void {
    this.cartSubscription = this._CartService.addCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._Toaster.success('Product added successfully');
        this._CartService.cartNumber.set(res.numOfCartItems);
      },
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    // Unsubscribing from all active subscriptions
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
