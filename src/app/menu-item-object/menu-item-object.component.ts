import { Component, Input, OnInit } from '@angular/core';
import { MenuItemListService } from '../menu-item-list.service';
import { MenuitemListComponent } from '../menuitem-list/menuitem-list.component';
import { MenuItem } from '../model/menuItem';
import { Message } from '../model/message';

@Component({
  selector: 'app-menu-item-object',
  templateUrl: './menu-item-object.component.html',
  styleUrls: ['./menu-item-object.component.css']
})
export class MenuItemObjectComponent implements OnInit {

  @Input() currentMenuItem!: MenuItem;
  constructor(public menuItemService: MenuItemListService, public menuItemListComponent: MenuitemListComponent) { }

  ngOnInit(): void {
  }

  deleteMenuItem(): void{
    this.menuItemService.deleteMenuItem(this.currentMenuItem.id).subscribe(
      (res: Message) => {
        alert(res.message);
        this.menuItemListComponent.ngOnInit();
      },
      (error: String) => {
        alert(error);
      }
    );
  }

  likeMenuItem(): void{
    this.menuItemService.likeMenuItem(this.currentMenuItem.id).subscribe(
      (res: Message) => {
        alert(res.message);
        this.menuItemListComponent.ngOnInit();
      },
      (error: String) => {
        alert(error);
      }
    );
  }

  dislikeMenuItem(): void{
    this.menuItemService.dislikeMenuItem(this.currentMenuItem.id).subscribe(
      (res: Message) => {
        alert(res.message);
        this.menuItemListComponent.ngOnInit();
      },
      (error: String) => {
        alert(error);
      }
    );
  }
}
