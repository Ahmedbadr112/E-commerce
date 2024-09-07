import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/servcies/product.service';
import { IProduct } from '../../core/interface/iproduct';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _productsService = inject(ProductService);
  detailProduct: IProduct | null = null;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        console.log(param.get('id'));
        let idProduct = param.get('id');
        this._productsService.getSpecifcProducts(idProduct).subscribe({
          next: (res) => {
            console.log(res.data);
            this.detailProduct = res.data;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }
}
