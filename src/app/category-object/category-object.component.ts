import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { CategoryListComponent } from '../category-list/category-list.component';
import { Category } from '../model/category';
import { Message } from '../model/message';

@Component({
  selector: 'app-category-object',
  templateUrl: './category-object.component.html',
  styleUrls: ['./category-object.component.css']
})
export class CategoryObjectComponent implements OnInit {

  @Input() currentCategory!: Category;
  constructor(public categoriesService: CategoriesService, public categoryListComponent: CategoryListComponent) { }

  ngOnInit(): void {
  }

  
  deleteCategory(): void{
    this.categoriesService.deleteCategory(this.currentCategory.id).subscribe(
      (res: Message) => {
        alert(res.message);
        this.categoryListComponent.ngOnInit();
      },
      (error: String) => {
        alert(error);
      }
    );
  }
}
