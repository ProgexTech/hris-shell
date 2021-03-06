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
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddUserComponent } from './add-user/add-user.component';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';
import { PermissionService } from './permission.service';
import { RoleService } from './role.service';
import { DepartmentComponent } from './department/department.component';
import { DepartmentService } from './department.service';
import { DesignationComponent } from './designation/designation.component';
import { DesignationService } from './designation.service';
import { WorkDayComponent } from './work-day/work-day.component';
import { WorkDayService } from './work-day.service';
import { HolidayComponent } from './holiday/holiday.component';
import { HolidayService } from './holiday.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LeaveStatusComponent,
    LeaveTypeComponent,
    AddUserComponent,
    RoleComponent,
    PermissionComponent,
    DepartmentComponent,
    DesignationComponent,
    WorkDayComponent,
    HolidayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      { path: 'users', component: UserComponent },
      { path: 'addUser', component: AddUserComponent },
      { path: 'leaveTypes', component: LeaveTypeComponent },
      { path: 'leaveStatus', component: LeaveStatusComponent },
      { path: 'roles', component: RoleComponent },
      { path: 'permissions', component: PermissionComponent },
      { path: 'departments', component: DepartmentComponent },
      { path: 'designations', component: DesignationComponent },
      { path: 'workDay', component: WorkDayComponent },
      { path: 'holiday', component: HolidayComponent }
    ])
  ],
  providers: [
    UserService,
    LeaveTypeService,
    LeaveStatusService,
    PermissionService,
    RoleService,
    DepartmentService,
    DesignationService,
    WorkDayService,
    HolidayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
