import { Component, OnInit } from '@angular/core';
import { LeaveStatusService } from '../leave-status.service';
import { LeaveStatus } from '../entities/leave-status';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent implements OnInit {

  allLeaveStatus: LeaveStatus[];
  errorMessage: string;
  model: any = {};

  constructor(private leaveStatusService: LeaveStatusService) { }

  ngOnInit() {
    this.leaveStatusService.getAllLeaveStatus()
      .subscribe(leaveStatus => this.allLeaveStatus = leaveStatus, err => this.errorMessage = <any>err);
  }

  addLeaveStatus() {
    this.leaveStatusService.addLeaveStatus(this.model)
    .subscribe(data => {
      this.leaveStatusService.getAllLeaveStatus()
      .subscribe(leaveStatus => this.allLeaveStatus = leaveStatus, err => this.errorMessage = <any>err);
    },err => this.errorMessage = <any>err);

    this.model = {};
  }

}
