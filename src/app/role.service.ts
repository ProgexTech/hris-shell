import { Injectable } from '@angular/core';
import { Role } from './entities/role';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoleService {

  private getAllRolesUrl = 'http://localhost:8080/api/roles';
  private addRoleUrl = 'http://localhost:8080/api/roles';

  constructor(private http: Http) { }

  getAllRoles(): Observable<Role[]> {
    return this.http.get(this.getAllRolesUrl)
      .map((response: Response) => <Role[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addRole(role: Role): void {
    this.http.post(this.addRoleUrl, role)
      .subscribe();
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
