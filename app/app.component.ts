import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="outer_main_container">
    <div class="outer_main_undercontainer">
    <router-outlet></router-outlet>
    </div>
    </div>
  `,
  styles: [`

  `]
})
export class AppComponent implements OnInit {
 
  constructor() {}

  ngOnInit() {

  }
}
