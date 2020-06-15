import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private API_URL: string = 'https://amberts/api/user'
  private users:Array<User>=[];

  constructor(private http: HttpClient) {
    this.generateTestUsers();
  }

  getUsersLocal():Array<User> {
    return this.users;
  }

  getClubById(id:number):User|null {
    for (let i:number;i<this.users.length;i++){
      if (this.users[i].id==id) return this.users[i];
    }
    return null;
  }

  private toUser(obj:any):User {
    let user = new User();
    user.id = obj.id;
    user.firstname = obj.firstname;
    user.lastname = obj.lastname||'';
    user.description = obj.description||'';
    user.avatar = obj.avatar;
    user.town = obj.town;
    user.country = obj.country;
    user.login = obj.login; 
    return user;
  }

  private handleError(err) {
    let errorMessage: string;
    if (err instanceof HttpResponse) {
      let body:any = err || '';
      let error = body.error || JSON.stringify(body);
      errorMessage = `${err.status} - ${err.statusText} || ''} ${err}`;
    } else errorMessage = err.message ? err.message : err.toString();
    return Observable.throw(errorMessage)
  }

  private generateTestUsers():void {  
    this.http.get('https://raw.githubusercontent.com/spineag/amberts/master/assets/server_temp/users.json')
      .map(res => res.data)
      .catch(this.handleError)
      .subscribe(data => {
        for (let i:number=0;i<data.length;i++){
          this.users.push(this.toUser(data[i]));
        }
        console.log(this.users);
    });
  }
}