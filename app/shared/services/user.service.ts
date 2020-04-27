import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private usersUrl: string = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) {}

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .map(res => res.data)
      .map(users => users.map(this.toUser))
      .catch(this.handleError);
  }

  /**
   * Get a single user
   */
  getUser(id: number): Observable<User> {
    return this.http.get(`${this.usersUrl}/${id}`)
      .map(res => res.data)
      .map(this.toUser)
      .catch(this.handleError)
  }

  // create a user
  createUser(user: User): Observable<User> {
    return this.http.post(this.usersUrl, user)
      .map(res => res.data)
      .catch(this.handleError)
  }

  // update a user
  updateUser(user: User): Observable<User> {
    return this.http.put(`${this.usersUrl}/${user.id}`, user)
      .map(res => res.data)
      .catch(this.handleError)
  }

  // delete a user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.usersUrl}/${id}`)
      .catch(this.handleError)
  }

  /**
   * Convert user info from API to our format
   */
  private toUser(user): User {
    return {
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      username: user.first_name,
      avatar: user.avatar
    }
  }

  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errorMessage: string;

    if (err instanceof HttpResponse) {
      let body:any = err || '';
      let error = body.error || JSON.stringify(body);

      errorMessage = `${err.status} - ${err.statusText} || ''} ${err}`;
    } else {
      errorMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errorMessage)
  }
}