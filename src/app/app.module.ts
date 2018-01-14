import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';

import { UserService } from './user.service';
import { LeaveTypeService } from './leave-type.service';
import { LeaveStatusService } from './leave-status.service';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AddUserComponent } from './add-user/add-user.component';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';
import { PermissionService } from './permission.service';
import { RoleService } from './role.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LeaveStatusComponent,
    LeaveTypeComponent,
    AddUserComponent,
    RoleComponent,
    PermissionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: 'users', component: UserComponent },
      { path: 'addUser', component: AddUserComponent },
      { path: 'leaveTypes', component: LeaveTypeComponent },
      { path: 'leaveStatus', component: LeaveStatusComponent },
      { path: 'roles', component: RoleComponent },
      { path: 'permissions', component: PermissionComponent }
    ])
  ],
  providers: [
    UserService,
    LeaveTypeService,
    LeaveStatusService,
    PermissionService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
