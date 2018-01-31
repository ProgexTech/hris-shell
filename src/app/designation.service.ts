import { Injectable } from '@angular/core';
import { Designation } from './entities/designation';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DesignationService {

  private getAllDesignationsUrl = 'http://localhost:8080/api/designations';
  private addDesignationUrl = 'http://localhost:8080/api/designations';

  constructor(private http: Http) { }

  getAllDesignations(): Observable<Designation[]> {
    return this.http.get(this.getAllDesignationsUrl)
      .map((response: Response) => <Designation[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addDesignation(department: Designation) {
    return this.http.post(this.addDesignationUrl, department)
      //.subscribe();
      .map((response: any) => { return response; });
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
