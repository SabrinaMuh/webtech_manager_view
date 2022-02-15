import { Component, OnInit } from '@angular/core';

import { Category } from '../model/category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => {
      console.log(categories);
      this.categories = categories;
      console.log(this.categories);
    });
  }

  add(name: string, type: string, desc: string): void {
    if (!name || !type) { return; }
    let id = this.createId();
    this.categoryService.addCategory({id, name, type, desc } as Category)
      .subscribe(category => {
        this.categories.push(category);
      });
  }

  delete(category: Category): void {
    this.categories = this.categories.filter(h => h !== category);
    this.categoryService.deleteCategory(category).subscribe();
  }

  createId(): number {
    return this.categories.length > 0 ? Math.max(...this.categories.map(category => category.id)) + 1 : 1;
  }
}
