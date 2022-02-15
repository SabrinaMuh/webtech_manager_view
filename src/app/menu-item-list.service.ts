import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './model/category';
import { MenuItem } from './model/menuItem';
import { Message } from './model/message';

const baseURL = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class MenuItemListService {

  constructor(private http: HttpClient) { }

  getMenuItemList(): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(baseURL + '/menuItems');
  }

  getMenuItem(id: number):Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(baseURL + "/menuItem/" + id);
  }

  getAllergeneForMenuItem(id: number): Observable<String[]>{
    return this.http.get<String[]>(baseURL + "/menuItem/allergene/" + id);
  }

  getCategoriesForMenuItem(id: number): Observable<Category[]>{
    return this.http.get<Category[]>(baseURL + "/menuItem/categories/" + id);
  }

  addMenuItem(menu: MenuItem): Observable<Message>{
    return this.http.post<Message>(baseURL + "/menuItem", menu);
  }

  deleteMenuItem(id: number): Observable<Message>{
    return this.http.delete<Message>(baseURL + "/menuItem/" + id);
  }

  updateMenuItem(menu: MenuItem): Observable<Message>{
    return this.http.put<Message>(baseURL + '/menuItem/' + menu.id, menu);
  }

  deleteCategoryFromMenuItem(menu_id: number, category_id: number): Observable<Message>{
    return this.http.delete<Message>(baseURL + "/menuItem/categories/" + menu_id + "/" + category_id);
  }

  addCategoryToMenuItem(menu_id: number, category_id: number): Observable<Message> {
    return this.http.post<Message>(baseURL + "/menuItem/categories/" + menu_id + "/" + category_id, undefined);
  }

  likeMenuItem(id: number): Observable<Message>{
    return this.http.put<Message>(baseURL + "/menuItem/like/" + id, undefined);
  }

  dislikeMenuItem(id: number): Observable<Message>{
    return this.http.put<Message>(baseURL + "/menuItem/dislike/" + id, undefined);
  }

  addAllergentoMenuItem(menu_id: number, allergen: String): Observable<Message>{
    return this.http.post<Message>(baseURL + "/menuItem/allergene/" + menu_id + "/" + allergen, undefined);
  }

  changeNullValueAllergen(menu_id: number, allergen: String): Observable<Message>{
    return this.http.put<Message>(baseURL + "/menuItem/allergene/" + menu_id + "/" + allergen, undefined);
  }

  changeValueToNullAllergen(menu_id: number): Observable<Message>{
    return this.http.put<Message>(baseURL + "/menuItem/allergene/" + menu_id, undefined);
  }

  changeNullValueCategories(menu_id: number, category_id: number): Observable<Message>{
    return this.http.put<Message>(baseURL + "/menuItem/categories/" + menu_id + "/" + category_id, undefined);
  }

  changeValueToNullCategories(menu_id: number): Observable<Message>{
    return this.http.put<Message>(baseURL + "/menuItem/categories/" + menu_id, undefined);
  }

  deleteAllergenFromMenuItem(menu_id: number, allergen: String): Observable<Message>{
    return this.http.delete<Message>(baseURL + "/menuItem/allergene/" + menu_id + "/" + allergen)
  }
}
