import { Injectable } from '@angular/core';
import { WorkDayCategory } from './entities/work-day-category';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class WorkDayService {

  private getAllWorkDayCategoriesUrl = 'http://localhost:8080/api/workDayCategories';
  private addWorkDayCategoryUrl = 'http://localhost:8080/api/workDayCategories';

  constructor(private http: Http) { }

  getAllWorkDayCategories(): Observable<WorkDayCategory[]> {
    return this.http.get(this.getAllWorkDayCategoriesUrl)
      .map((response: Response) => <WorkDayCategory[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addWorkDayCategory(workDayCategory: WorkDayCategory) {
    return this.http.post(this.addWorkDayCategoryUrl, workDayCategory)
      //.subscribe();
      .map((response: any) => { return response; });
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
