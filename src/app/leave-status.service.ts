import { Injectable } from '@angular/core';
import { LeaveStatus } from './entities/leave-status';

@Injectable()
export class LeaveStatusService {

  constructor() { }

  getAllLeaveStatus(): LeaveStatus[] {
    const leaveStatus: LeaveStatus[] = [
        {code: 'APP', name: 'Approved', description: 'Approved Leave'},
        {code: 'CAN', name: 'Canceled', description: 'Canceled Leave'},
        {code: 'REJ', name: 'Rejected', description: 'Rejected Leave'},
    ];
    return leaveStatus;
  }


}
