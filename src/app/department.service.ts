import { Injectable } from '@angular/core';
import { Department } from './entities/department';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DepartmentService {

  private getAllDepartmentsUrl = 'http://localhost:8080/api/departments';
  private addDepartmentUrl = 'http://localhost:8080/api/departments';

  constructor(private http: Http) { }

  getAllDepartments(): Observable<Department[]> {
    return this.http.get(this.getAllDepartmentsUrl)
      .map((response: Response) => <Department[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addDepartment(department: Department) {
    return this.http.post(this.addDepartmentUrl, department)
      //.subscribe();
      .map((response: any) => { return response; });
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
