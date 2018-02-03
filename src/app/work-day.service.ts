import { Injectable } from '@angular/core';
import { WorkDayCategory } from './entities/work-day-category';
import { WorkDay } from './entities/work-day';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class WorkDayService {

  private getAllWorkDayCategoriesUrl = 'http://localhost:8080/api/workDayCategories';
  private addWorkDayCategoryUrl = 'http://localhost:8080/api/workDayCategories';

  private getAllWorkDaysUrl = 'http://localhost:8080/api/workDays';
  private addWorkDayUrl = 'http://localhost:8080/api/workDays';

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

  getAllWorkDays(): Observable<WorkDay[]> {
    return this.http.get(this.getAllWorkDaysUrl)
      .map((response: Response) => <WorkDay[]>response.json())
      .do(data => console.log('Result: '+ JSON.stringify(data)))
      .catch(this.handleError);
  }

  addWorkDay(workDay: WorkDay) {
    return this.http.post(this.addWorkDayUrl, workDay)
      .map((response: any) => { return response; });
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
