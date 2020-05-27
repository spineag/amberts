import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start-menu/start.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { PageListEventsComponent } from './page-list-events/page-list-events.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent,
    children: [
      {
        path: '',
        component: StartMenuComponent
      }
      // {
      //   path: ':id',
      //   component: UserSingleComponent
      // },
      // {
      //   path: ':id/edit',
      //   component: UserEditComponent
      // }
    ]
  },
  {
    path: 'list-events',
        component: PageListEventsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);