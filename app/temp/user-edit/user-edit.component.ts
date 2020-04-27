import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'user-edit',
  template: `
    <div *ngIf="user">
      <form (ngSubmit)="updateUser()">
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

        <button type="submit">Update user</button>
      </form>
    </div>
  `,
  styles: [`

  `]
})
export class UserEditComponent implements OnInit {
  user: User;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // grab the user
    let id = this.route.snapshot.params['id'];
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  /**
   * update the user
   */
  updateUser() {
    this.successMessage = '';
    this.errorMessage = '';

    this.userService.updateUser(this.user)
      .subscribe(
        user => {
          this.successMessage = 'User was updated.';
          console.log('user was updated');
        },
        err => {
          this.errorMessage = 'User could not be updated.';
          console.log(err);
        }
      )
  }


}
