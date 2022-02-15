import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { MenuitemListComponent } from './menuitem-list/menuitem-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserObjectComponent } from './user-object/user-object.component';
import { MenuItemObjectComponent } from './menu-item-object/menu-item-object.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MenuItemEditComponent } from './menu-item-edit/menu-item-edit.component';
import { EditMenuItemAllergenelistComponent } from './edit-menu-item-allergenelist/edit-menu-item-allergenelist.component';
import { EditMenuitemCategoriesListComponent } from './edit-menuitem-categories-list/edit-menuitem-categories-list.component';
import { QRCodeModule } from 'angular2-qrcode';
import { TablesComponent } from './tables/tables.component';
import { MessagesComponent } from './messages/messages.component';
import { CategoriesComponent } from './categories/categories.component';
import { TableDetailComponent } from './table-details/table-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { CategoryObjectComponent } from './category-object/category-object.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuItemComponent,
    UserListComponent,
    MenuitemListComponent,
    UserObjectComponent,
    MenuItemObjectComponent,
    UserEditComponent,
    MenuItemEditComponent,
    EditMenuItemAllergenelistComponent,
    EditMenuitemCategoriesListComponent,
    TablesComponent,
    MessagesComponent,
    CategoriesComponent,
    TableDetailComponent,
    CategoryDetailsComponent,
    CategoryEditComponent,
    CategoryListComponent,
    CategoryComponent,
    CategoryObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
