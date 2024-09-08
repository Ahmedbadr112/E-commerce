import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../core/servcies/brands.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit { 
  constructor(private _BrandsService:BrandsService){}

  allBrands:any = [];

ngOnInit(): void {
    
  this._BrandsService.getAllBrands().subscribe({
    next:(response)=>{
      this.allBrands = response.data
    }
  })
}


}
