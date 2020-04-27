import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start-menu/start.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { UserCreateComponent } from './temp/user-create/user-create.component';
import { UserSingleComponent } from './temp/user-single/user-single.component';
import { UserEditComponent } from './temp/user-edit/user-edit.component';

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
      },
      {
        path: 'create',
        component: UserCreateComponent
      },
      {
        path: ':id',
        component: UserSingleComponent
      },
      {
        path: ':id/edit',
        component: UserEditComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);