import { Injectable } from '@angular/core';
import { LeaveType } from './entities/leave-type';

@Injectable()
export class LeaveTypeService {

  constructor() { }

  getAllLeaveTypes(): LeaveType[] {
    const leaveTypes: LeaveType[] = [
        {code: 'ANN', name: 'Annual', description: 'Annual Leave'},
        {code: 'CAS', name: 'Casual', description: 'Casual Leave'},
        {code: 'SIC', name: 'Sick', description: 'Sick Leave'},
    ];
    return leaveTypes;
  }

}
