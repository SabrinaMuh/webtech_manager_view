import { Component, OnInit } from '@angular/core';
import { MenuItemListService } from '../menu-item-list.service';
import { MenuItem } from '../model/menuItem';

@Component({
  selector: 'app-menuitem-list',
  templateUrl: './menuitem-list.component.html',
  styleUrls: ['./menuitem-list.component.css']
})
export class MenuitemListComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(public menuItemListService: MenuItemListService) {
    this.updateMenuItemList();
  }

  private updateMenuItemList(){
    this.menuItemListService.getMenuItemList().subscribe(
      (menuItemList: MenuItem[]) => {
        this.menuItems = menuItemList;
      },
      (error: String) => {
        alert(error);
      }
    );
  }

  ngOnInit(): void {
    this.updateMenuItemList();
  }

}
