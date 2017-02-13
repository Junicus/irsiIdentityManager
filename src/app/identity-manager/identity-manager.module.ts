import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersListComponent } from './users/users-list.component';
import { RolesListComponent } from './roles/roles-list.component';
import { HomeComponent } from './home/home.component';

import { routing } from '../app.routes';

@NgModule({
  declarations: [
    HomeComponent,
    UsersListComponent,
    RolesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  exports: [
    HomeComponent,
    UsersListComponent,
    RolesListComponent
  ],
  providers: [],
})
export class IdentityManagerModule { }
