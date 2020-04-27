import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';


@Component({
  selector: 'user-list',
  template: `
    <h1>Users</h1>
    
    <a routerLink="/users/create">Create user</a>
    <br />
    <br />

    <div class="user-list" *ngIf="users">
      <div *ngFor="let user of users">
        <div [routerLink]="['/users', user.id]">
          <img [src]="user.avatar">

          <h2>{{ user.name }} <small>{{ user.username }}</small></h2>
        </div>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class UserListComponent implements OnInit {
  users: User[]

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

}
