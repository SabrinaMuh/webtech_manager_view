import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { MenuItemListService } from '../menu-item-list.service';
import { Category } from '../model/category';
import { MenuItem } from '../model/menuItem';
import { Message } from '../model/message';

@Component({
  selector: 'app-menu-item-edit',
  templateUrl: './menu-item-edit.component.html',
  styleUrls: ['./menu-item-edit.component.css']
})
export class MenuItemEditComponent implements OnInit {
  selectedCategories?: Category[] = [];
  selectedCategoriesId?: number[] = [];

  id: number = 0;
  currentMenuItem: MenuItem = new MenuItem(0, "", "", 0, 0, 0, "", [], [], []);

  constructor(public categoriesService: CategoriesService, public menuItemService: MenuItemListService, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.menuItemService.getMenuItem(this.id).subscribe(
      (menuItem: MenuItem[]) => {
        this.currentMenuItem = menuItem[0];
      },
      (error) => {
        alert(error);
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void{
    if(f.value.title === "" || f.value.description === "" || f.value.price === "" || f.value.status == ""){
      alert("ERROR: Every field must be filled out.");
    }else{
      let menuItem: MenuItem = new MenuItem(this.currentMenuItem.id, f.value.title, f.value.description, f.value.price, 0, 0, f.value.status, [], [], []);
      this.menuItemService.updateMenuItem(menuItem).subscribe(
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
