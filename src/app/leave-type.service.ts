import { Injectable } from '@angular/core';
import { LeaveType } from './entities/leave-type';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LeaveTypeService {

  private getAllLeaveTypesUrl = 'http://localhost:8080/api/leaveTypes';
  private addLeaveTypeUrl = 'http://localhost:8080/api/leaveTypes';

  constructor(private http: Http) { }

  getAllLeaveTypes(): Observable<LeaveType[]> {
    return this.http.get(this.getAllLeaveTypesUrl)
      .map((response: Response) => <LeaveType[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addLeaveType(leaveType: LeaveType) {
    return this.http.post(this.addLeaveTypeUrl, leaveType)
      //.subscribe();
      .map((response: any) => { return response; });
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
