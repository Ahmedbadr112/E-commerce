import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/servcies/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  constructor(private _CategoriesService:CategoriesService){}

  categoryItems:any = [];

  ngOnInit(): void {
      
    this._CategoriesService.getAllCategories().subscribe({
      next:(response)=>{
        this.categoryItems = response.data
      }
    })
  }

}
