import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './identity-manager/users/users-list.component';
import { RolesListComponent } from './identity-manager/roles/roles-list.component';
import { HomeComponent } from './identity-manager/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'roles', component: RolesListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
