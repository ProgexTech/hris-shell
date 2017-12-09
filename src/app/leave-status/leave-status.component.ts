import { Component, OnInit } from '@angular/core';
import { LeaveStatusService } from '../leave-status.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent implements OnInit {

  constructor(private leaveStatusService: LeaveStatusService) { }

  ngOnInit() {
  }

}
