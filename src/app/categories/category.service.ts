import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../model/category.model';
import { MessageService } from '../messages/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = 'http://localhost:3000/categories'

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET categories from the server */
  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl)
      .pipe(
        tap(categories => this.log('fetched categories')),
        catchError(this.handleError('getCategories', []))
      );
  }

  /** GET category by id. Return `undefined` when id not found */
  getCategory<Data>(id: number): Observable<Category[]> {
      const url = `${this.categoryUrl}/${id}`;

      return this.http.get<Category[]>(url).pipe(
        tap(_ => this.log(`fetched category id=${id}`)),
        catchError(this.handleError<Category[]>(`getCategory id=${id}`))
      );
  }

   //////// Save methods //////////

  /** POST: add a new category to the server */
  addCategory (category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoryUrl, category, httpOptions).pipe(
      tap((category: Category) => this.log(`added category w/ title=${category.name}`)),
      catchError(this.handleError<Category>('addCategory'))
    );
  }

  /** DELETE: delete the category from the server */
  deleteCategory (category: Category | number): Observable<Category> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this.categoryUrl}/${id}`;

    return this.http.delete<Category>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted category id=${id}`)),
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }

  /** PUT: update the category on the server */
  updateCategory (category: Category): Observable<void> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this.categoryUrl}/${id}`;

    return this.http.put(url, category, httpOptions).pipe(
      tap(_ => this.log(`updated category id=${category.id}`)),
      catchError(this.handleError<any>('updateCategory'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CategoryService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CategoryService: ${message}`);
  }
}
