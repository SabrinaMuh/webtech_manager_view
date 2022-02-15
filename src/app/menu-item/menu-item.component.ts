import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { MenuItemListService } from '../menu-item-list.service';
import { Allergen } from '../model/allergen';
import { Category } from '../model/category';
import { MenuItem } from '../model/menuItem';
import { Message } from '../model/message';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  options: Category[] = [];

  selectedCategories: Category[] = [];
  selectedCategoriesId: number[] = [];
  category_id: number = 0;
  category_title: String = "";
  category: Category = new Category(0, "", "");
  selectedAllergene: String[] = [];
  allergen: String = "";

  allergene: Allergen[] = [{
    title: "Glutenhaltiges Getreide",
    id: "A"
  }, {
    title: "Krebstiere",
    id: "B"
  }, {
    title: "Eier",
    id: "C"
  }, {
    title: "Fische",
    id: "D"
  }, {
    title: "Erdnüsse",
    id: "E"
  }, {
    title: "Sojabohnen",
    id: "F"
  }, {
    title: "Milch",
    id: "G"
  }, {
    title: "Schalenfrüchte",
    id: "H"
  }, {
    title: "Sellerie",
    id: "L"
  }, {
    title: "Senf",
    id: "M"
  }, {
    title: "Sesamsamen",
    id: "N"
  }, {
    title: "Schwefeldioxid und Sulphite",
    id: "O"
  }, {
    title: "Lupinen",
    id: "P"
  }, {
    title: "Weichtiere",
    id: "R"
  }]; 

  constructor(public categoriesService: CategoriesService, public menuItemService: MenuItemListService) {
    this.updateCategoriesList();
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

  ngOnInit(): void {
  }

  selectedAllergen(event: any): void{
    this.allergen = event.target.value;
  }

  addAllergentoList(): void{
    if(this.selectedAllergene.indexOf(this.allergen) === -1){
      this.selectedAllergene.push(this.allergen);
    }
  }

  deleteAllergenFromList():void{
    this.selectedAllergene = this.selectedAllergene.filter(item => item !== this.allergen);
  }

  selectedCategory(event: any): void{
    this.category_id = event.target.value;
    this.category_title = this.options[this.category_id-1].name;
    this.category = new Category(this.category_id, this.category_title, "");
  }

  addCategorytoList(): void{
    if(this.selectedCategories.indexOf(this.category) === -1 && this.category_title !== "" && this.category_id != 0){
      this.selectedCategories.push(this.category);
      this.selectedCategoriesId.push(this.category_id);
    }
  }

  deleteCategoryFromList():void{
    this.selectedCategories = this.selectedCategories.filter(item => item.name !== this.category.name);
    this.selectedCategoriesId = this.selectedCategoriesId.filter(item => item != this.category_id);
  }

  onSubmit(f: NgForm): void{
    if(f.value.id === "" || f.value.title === "" || f.value.description === "" || f.value.price === "" || this.selectedAllergene.length == 0 || this.selectedCategories.length == 0){
      alert("ERROR: Every field must be filled out.");
    }else{
      let menuItem: MenuItem = new MenuItem(f.value.id, f.value.title, f.value.description, f.value.price, 0, 0, f.value.status, this.selectedAllergene, this.selectedCategoriesId, this.selectedCategories);
      this.menuItemService.addMenuItem(menuItem).subscribe(
        (res: Message) =>{
          alert(res.message);
        },
        (error: String) => {
          alert(error);
        }
      );
    }
  }
}
