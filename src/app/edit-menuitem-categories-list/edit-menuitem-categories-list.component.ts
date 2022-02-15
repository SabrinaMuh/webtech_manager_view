import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { MenuItemListService } from '../menu-item-list.service';
import { Category } from '../model/category';
import { Message } from '../model/message';

@Component({
  selector: 'app-edit-menuitem-categories-list',
  templateUrl: './edit-menuitem-categories-list.component.html',
  styleUrls: ['./edit-menuitem-categories-list.component.css']
})
export class EditMenuitemCategoriesListComponent implements OnInit {
  options: Category[] = [];
  selectedCategories: Category[] = [];
  id: number = 0;
  category_id: number = 0;
  category_title: String = "";
  category: Category = new Category(0, "", "");
  emptyCategories: Category[] = [];

  constructor(public categoriesService: CategoriesService, public route: ActivatedRoute, public menuItemService: MenuItemListService) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.updateCategoriesList();
    this.updateSelectedCategories();
  }

  ngOnInit(): void {
    
  }

  private updateCategoriesList(){
    this.categoriesService.getCategoriesList().subscribe(
      (categoriesList: Category[]) => {
        this.options = categoriesList;
      },
      (error) => {
        alert(error);
      }
    );
  }

  updateSelectedCategories(){
    this.menuItemService.getCategoriesForMenuItem(this.id).subscribe(
      (categories: Category[]) => {
        this.selectedCategories = categories;
        if(this.selectedCategories[0].id == null){
          this.emptyCategories = this.selectedCategories;
          this.selectedCategories = [];
        }
      },
      (error) => {
        alert(error);
      }
    );
  }

  selectedCategory(event: any): void{
    this.category = new Category(event.target.value, this.options[event.target.value-1].name, this.options[event.target.value-1].description);
  }

  addCategorytoList(): void{
    if(this.category.id == 0){
      alert("Choose something");
    } else{
      if(this.emptyCategories.length == 1 && this.emptyCategories[0].id == null){
        this.menuItemService.changeNullValueCategories(this.id, this.category.id).subscribe(
          (res: Message) => {
            alert(res.message);
            this.updateSelectedCategories();
          },
          (error) => {
            alert(error);
          }
        );
      }else{
        this.menuItemService.addCategoryToMenuItem(this.id, this.category.id).subscribe(
          (res: Message) => {
            alert(res.message);
            this.updateSelectedCategories();
          },
          (error) => {
            alert(error);
          }
        );
      }
    }
  }

  deleteCategoryFromList():void{
    if(this.category.id == 0){
      alert("Choose something");
    } else{
      if(this.selectedCategories.length == 1){
        this.menuItemService.changeValueToNullCategories(this.id).subscribe(
          (res: Message) => {
            alert(res.message);
            this.updateSelectedCategories();
          },
          (error) => {
            alert(error);
          }
        );        
      }else{
        this.menuItemService.deleteCategoryFromMenuItem(this.id, this.category.id).subscribe(
          (res: Message) => {
            alert(res.message);
            this.updateSelectedCategories();
          },
          (error) => {
            alert(error);
          }
        );
      }
    }
  }
}
