import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Table } from '../model/table.model';
import { MessageService } from '../messages/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  private tableUrl = 'http://localhost:3000/tables'

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET tables from the server */
  getTables (): Observable<Table[]> {
    return this.http.get<Table[]>(this.tableUrl)
      .pipe(
        tap(tables => this.log('fetched tables')),
        catchError(this.handleError('getTables', []))
      );
  }

  /** GET table by id. Return `undefined` when id not found */
  getTable<Data>(id: number): Observable<Table[]> {
    const url = `${this.tableUrl}/${id}`;

      return this.http.get<Table[]>(url).pipe(
        tap(_ => this.log(`fetched table id=${id}`)),
        catchError(this.handleError<Table[]>(`getCategory id=${id}`))
      );
    
  }

   //////// Save methods //////////

  /** POST: add a new table to the server */
  addTable (table: Table): Observable<Table> {
    return this.http.post<Table>(this.tableUrl, table, httpOptions).pipe(
      tap((table: Table) => this.log(`added table w/ tablenumber=${table.tablenumber}`)),
      catchError(this.handleError<Table>('addTable'))
    );
  }

  /** DELETE: delete the table from the server */
  deleteTable (table: Table | number): Observable<Table> {
    const id = typeof table === 'number' ? table : table.id;
    const url = `${this.tableUrl}/${id}`;

    return this.http.delete<Table>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted table id=${id}`)),
      catchError(this.handleError<Table>('deleteTable'))
    );
  }

  /** PUT: update the table on the server */
  updateTable (table: Table): Observable<void> {
    const id = typeof table === 'number' ? table : table.id;
    const url = `${this.tableUrl}/${id}`;

    return this.http.put(url, table, httpOptions).pipe(
      tap(_ => this.log(`updated table id=${table.id}`)),
      catchError(this.handleError<any>('updateTable'))
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

  /** Log a TableService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TableService: ${message}`);
  }
}
