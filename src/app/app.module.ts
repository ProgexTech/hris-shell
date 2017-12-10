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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LeaveStatusComponent,
    LeaveTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    UserService,
    LeaveTypeService,
    LeaveStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
