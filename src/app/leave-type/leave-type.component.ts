import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../leave-type.service';
import { LeaveType } from '../entities/leave-type';

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {

  allLeaveTypes: LeaveType[];
  errorMessage: string;

  constructor(private leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
    this.leaveTypeService.getAllLeaveTypes()
      .subscribe(leaveTypes => this.allLeaveTypes = leaveTypes, err => this.errorMessage = <any>err);
  }

}
