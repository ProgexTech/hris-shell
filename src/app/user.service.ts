import { Injectable } from '@angular/core';
import { User } from './entities/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private getAllUsersUrl = 'http://localhost:8080/api/users';
  private addUserUrl = 'http://localhost:8080/api/users';

  constructor(private http: Http) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get(this.getAllUsersUrl)
      .map((response: Response) => <User[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addUser(user: User): void {
    this.http.post(this.addUserUrl, user)
      .subscribe();
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
