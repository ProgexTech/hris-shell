import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../leave-type.service';

@Component({
  selector: 'app-leave-type',
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.css']
})
export class LeaveTypeComponent implements OnInit {

  constructor(private leaveTypeService: LeaveTypeService) { }

  ngOnInit() {
  }

}
