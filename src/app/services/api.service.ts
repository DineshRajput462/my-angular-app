import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private url = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  get<T>(id: T): Observable<User> {
    let url = `${this.url}/${id}`;
    return this.httpClient.get<User>(url);
  }

  add(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }

  update(user: User): Observable<User> {
    let url = `${this.url}/${user.id}`;
    return this.httpClient.put<User>(url, user);
  }

  delete<T>(id: T): Observable<User> {
    let url = `${this.url}/${id}`;
    return this.httpClient.delete<User>(url);
  }
}
