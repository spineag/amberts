import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'user-create',
  template: `
    <div *ngIf="user">
      <form (ngSubmit)="createUser()">
        <div>
          <label>Name</label>
          <input type="text" name="name" [(ngModel)]="user.name">
        </div>

        <div>
          <label>Username</label>
          <input type="text" name="username" [(ngModel)]="user.username">
        </div>

        <div *ngIf="successMessage">{{ successMessage }}</div>
        <div *ngIf="errorMessage">{{ errorMessage }}</div>

        <button type="submit">Create user</button>
      </form>
    </div>
  `,
  styles: [`

  `]
})
export class UserCreateComponent implements OnInit {
  user: User = {name: '', username: '', avatar: ''};
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {

  }

  /**
   * create a user
   */
  createUser() {
    this.successMessage = '';
    this.errorMessage = '';

    this.userService.createUser(this.user)
      .subscribe(user => {
        this.successMessage = 'User was created!';

        // navigate back to users page
        this.router.navigate(['/users'])
        console.log('user was created');
      })
  }

}
