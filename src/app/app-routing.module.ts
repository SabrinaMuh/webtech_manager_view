import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { EditMenuItemAllergenelistComponent } from './edit-menu-item-allergenelist/edit-menu-item-allergenelist.component';
import { EditMenuitemCategoriesListComponent } from './edit-menuitem-categories-list/edit-menuitem-categories-list.component';
import { MenuItemEditComponent } from './menu-item-edit/menu-item-edit.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuitemListComponent } from './menuitem-list/menuitem-list.component';
import { TableDetailComponent } from './table-details/table-details.component';
import { TablesComponent } from './tables/tables.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', redirectTo: '/tables', pathMatch: 'full' },
  {path: 'tables', component: TablesComponent},
  {path: 'detail/:id', component: TableDetailComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:id', component: CategoryDetailsComponent},
  {path: 'user', component: UserComponent},
  {path: 'menuItem', component: MenuItemComponent},
  {path: 'menuItem/:id', component: MenuItemEditComponent},
  {path: 'menuItem/allergene/:id', component: EditMenuItemAllergenelistComponent},
  {path: 'menuItem/categories/:id', component: EditMenuitemCategoriesListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'user/:id', component: UserEditComponent},
  {path: 'menuItems', component: MenuitemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
