import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { UserService } from './shared/services/user.service';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { StartComponent } from './start-menu/start.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { PageListEventsComponent } from './page-list-events/page-list-events.component';
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
    AppComponent,StartComponent,StartMenuComponent,StartMenuItemComponent,PageListEventsComponent],
  providers: [
    UserService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
