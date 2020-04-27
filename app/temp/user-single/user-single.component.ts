import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';


@Component({
  selector: 'user-single',
  template: `
    <div *ngIf="user">
      <a [routerLink]="['/users', user.id, 'edit']">Edit</a>
      <br /><br />
      <a (click)="deleteUser()">Delete user</a>

      <h2>{{ user.name }} <small>{{ user.username }}</small></h2>
      <img [src]="user.avatar">
    </div>
  `,
  styles: [`

  `]
})
export class UserSingleComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    // grab id from url
    let id = this.route.snapshot.params['id'];

    // use the userservice to get user
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  /**
   * Delete user
   */
  deleteUser() {
    this.userService.deleteUser(this.user.id)
      .subscribe(data => {
        console.log('user was deleted');
        // route back to the users page
        this.router.navigate(['/users']);
      })
  }

}
