import { Injectable } from '@angular/core';
import { Permission } from './entities/permssion';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class PermissionService {

  private getAllPermissionsUrl = 'http://localhost:8080/api/permissions';
  private addPermissionsUrl = 'http://localhost:8080/api/permissions';

  constructor(private http: Http) { }

  getAllPermissions(): Observable<Permission[]> {
    return this.http.get(this.getAllPermissionsUrl)
      .map((response: Response) => <Permission[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addPermission(permission: Permission) {
    return this.http.post(this.addPermissionsUrl, permission)
      //.subscribe();
      .map((response: any) => { return response; });
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
