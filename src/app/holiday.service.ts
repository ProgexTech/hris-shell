import { Injectable } from '@angular/core';
import { Holiday } from './entities/holiday';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HolidayService {

  private getAllHolidaysUrl = 'http://localhost:8080/api/holidays';
  private addHolidayUrl = 'http://localhost:8080/api/holidays';
  private getAllYearsUrl = 'http://localhost:8080/api/holidays/years';
  private getAllHolidaysByYearUrl = 'http://localhost:8080/api/holidays/byYear/';

  constructor(private http: Http) { }

  getAllYears(): Observable<number[]> {
    return this.http.get(this.getAllYearsUrl)
      .map((response: Response) => <number[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getAllHolidays(): Observable<Holiday[]> {
    return this.http.get(this.getAllHolidaysUrl)
      .map((response: Response) => <Holiday[]>response.json())
      .do(data => console.log('Result: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getAllHolidaysByYear(year: number): Observable<Holiday[]> {
    var url = this.getAllHolidaysByYearUrl + year;
    console.log(url);
    return this.http.get(this.getAllHolidaysByYearUrl + year)
    .map((response: Response) => <Holiday[]>response.json())
    .do(data => console.log('Result: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  addHoliday(holiday: Holiday) {
    return this.http.post(this.addHolidayUrl, holiday)
      //.subscribe();
      .map((response: any) => { return response; });
  }

  private handleError(err: Response) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

}
