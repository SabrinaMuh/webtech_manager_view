import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { Message } from './model/message';

const baseURL = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})

export class UsersListService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(baseURL + '/users');
  }
  getUser(id: number): Observable<User[]>{
    return this.http.get<User[]>(baseURL + '/user/' + id);
  }
  addUser(user: User): Observable<Message>{
    return this.http.post<Message>(baseURL + '/user', user);
  }
  deleteUser(id: number): Observable<Message>{
    return this.http.delete<Message>(baseURL + "/user/" + id);
  }
  updateUser(user: User): Observable<Message>{
    return this.http.put<Message>(baseURL + "/user/" + user.id, user);
  }
}
