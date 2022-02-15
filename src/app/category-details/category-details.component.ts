import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CategoryService } from '../categories/category.service'; 
import { Category } from '../model/category.model'; 

export interface Type{
  "value": string,
  "text": string
}

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})

export class CategoryDetailsComponent implements OnInit {
  @Input()
  category!: Category;

  typeArray: Type[] =[{"value": "food",
                        "text": "Gericht"},

                        {"value": "beverage",
                        "text": "Getränk"},

                        {"value": "special",
                        "text": "Spezialität"}];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService) { }
  
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    const stringid = this.route.snapshot.paramMap.get('id');
    
    if (stringid !== null){
      let id=+stringid;

      this.categoryService.getCategory(id)
      .subscribe((category) => {
        console.log(category);
        this.category = category[0];
      });
    }else{
      //TODO: id === null?
      this.categoryService.getCategory(1)
      .subscribe((category) => {
        console.log(category);
        this.category = category[0];
      });
    }
    
  }
  
  save(): void {
    this.categoryService.updateCategory(this.category)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  
}
