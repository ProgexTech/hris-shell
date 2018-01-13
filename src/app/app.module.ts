import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LeaveStatusComponent,
    LeaveTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: 'users', component: UserComponent },
      { path: 'leaveTypes', component: LeaveTypeComponent },
      { path: 'leaveStatus', component: LeaveStatusComponent },
      { path: 'addUser', component: LeaveStatusComponent }
    ])
  ],
  providers: [
    UserService,
    LeaveTypeService,
    LeaveStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
