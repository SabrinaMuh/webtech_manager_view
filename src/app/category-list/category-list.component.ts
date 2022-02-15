import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../model/category';
import { Message } from '../model/message';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  /*categories: any[] = [{
    id: 1,
    name: "test"
  }]*/

  categories: Category[] = [];

  constructor(public categoriesService: CategoriesService) { 
    this.updateCategoriesList();
  }

  private updateCategoriesList(){
    this.categoriesService.getCategoriesList().subscribe(
      (categoriesList: Category[]) => {
        this.categories = categoriesList;
      },
      (error) => {
        alert(error);
      }
    );
  }

  ngOnInit(): void {
    this.updateCategoriesList();
  }

}
