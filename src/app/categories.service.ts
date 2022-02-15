import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './model/category';
import { Message } from './model/message';

const baseURL = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategoriesList():Observable<Category[]>{
    return this.http.get<Category[]>(baseURL + '/categories');
  }

  getCategory(id: number):Observable<Category[]>{
    return this.http.get<Category[]>(baseURL + '/category/' + id);
  }

  addCategory(category: Category):Observable<Message>{
    return this.http.post<Message>(baseURL + '/category', category);
  }

  deleteCategory(id: number):Observable<Message>{
    return this.http.delete<Message>(baseURL + '/category/' + id);
  }

  updateCategory(category: Category):Observable<Message>{
    return this.http.put<Message>(baseURL + '/category/' + category.id, category);
  }
}
