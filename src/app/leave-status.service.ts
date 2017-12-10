import { Injectable } from '@angular/core';
import { LeaveStatus } from './entities/leave-status';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LeaveStatusService {

  private url = 'http://localhost:8080/api/leaveStatus';

  constructor(private http: Http) { }

  getAllLeaveStatus(): Observable<LeaveStatus[]> {
    return this.http.get(this.url)
      .map((response: Response) => <LeaveStatus[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
