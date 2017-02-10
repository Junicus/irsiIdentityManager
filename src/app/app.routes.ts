import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './identity-manager/users/users-list.component';
import { RolesListComponent } from './identity-manager/roles/roles-list.component';

export const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'roles', component: RolesListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
