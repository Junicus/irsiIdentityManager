import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersListComponent } from './users/users-list.component';
import { RolesListComponent } from './roles/roles-list.component';

@NgModule({
  imports: [
    FormsModule,
    HttpModule
  ],
  exports: [
    UsersListComponent,
    RolesListComponent
  ],
  declarations: [
    UsersListComponent,
    RolesListComponent
  ],
  providers: [],
})
export class IdentityManagerModule { }
