import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { routing } from './app.routing';

import { UserService } from './shared/services/user.service';

import { AppComponent } from './app.component';
import { StartComponent } from './start-menu/start.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { UserListComponent } from './temp/user-list/user-list.component';
import { UserCreateComponent } from './temp/user-create/user-create.component';
import { UserSingleComponent } from './temp/user-single/user-single.component';
import { UserEditComponent } from './temp/user-edit/user-edit.component';
import { StartMenuItemComponent } from './start-menu/start-item-menu/start-menu-item.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';




@NgModule({
  imports:      [
    BrowserModule, FormsModule, HttpClientModule,
    routing, MatIconModule
  ],
  declarations: [
    AppComponent,StartComponent,UserListComponent,UserCreateComponent,UserSingleComponent,
    UserEditComponent,StartMenuComponent,StartMenuItemComponent],
  providers: [
    UserService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
