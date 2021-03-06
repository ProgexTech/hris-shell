import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../holiday.service';
import { Holiday } from '../entities/holiday';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  allYears: number[] = [];
  selectedYear: number;
  errorMessage: string;
  model: any = {};
  allHolidays: Holiday[] = [];

  minDate: Date;
  maxDate: Date;

  formattedHolidays: any[] = [];
  monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    var today = new Date;
    this.minDate = new Date(today.getFullYear(), 0, 1);
    this.maxDate = new Date(today.getFullYear(), 11, 31);

    for (var i = today.getFullYear() - 10; i <= today.getFullYear() + 20; i++) {
      this.allYears.push(i);
    }
    this.selectedYear = today.getFullYear();

    this.holidayService.getAllHolidaysByYear(this.selectedYear)
      .subscribe(allHolidays => {
        this.allHolidays = allHolidays;
        this.prepareHolidays();
      }, err => this.errorMessage = <any>err);
  }

  onYearChange(year) {
    this.minDate = new Date(year, 0, 1);
    this.maxDate = new Date(year, 11, 31);
    this.selectedYear = year;

    this.holidayService.getAllHolidaysByYear(this.selectedYear)
      .subscribe(allHolidays => {
        this.allHolidays = allHolidays;
        this.prepareHolidays();
      }, err => this.errorMessage = <any>err);
  }

  addNewHoliday() {
    if (this.model && this.model.date) {
      this.holidayService.addHoliday(this.model)
        .subscribe(data => {
          this.holidayService.getAllHolidaysByYear(this.selectedYear)
            .subscribe(allHolidays => {
              this.allHolidays = allHolidays;
              this.prepareHolidays();
            }, err => this.errorMessage = <any>err);
        }, err => this.errorMessage = <any>err);
    }
    this.model = {};
  }

  private prepareHolidays() {
    this.formattedHolidays = [];
    for (var month = 0; month < 12; month++) {
      let obj: any = {};
      let holidays: Holiday[] = [];
      if (this.allHolidays) {
        for (let h of this.allHolidays) {
          let d: Date = new Date(h.date);
          if (d.getMonth() == month) {
            holidays.push(h);
          }
        }
      }
      if (holidays.length != 0) {
        obj.month = this.monthNames[month];
        obj.holidays = holidays;
        this.formattedHolidays.push(obj);
      }
    }
  }

  removeHoliday(holiday: Holiday) {
    this.holidayService.removeHoliday(holiday)
      .subscribe(data => {
        this.holidayService.getAllHolidaysByYear(this.selectedYear)
          .subscribe(allHolidays => {
            this.allHolidays = allHolidays;
            this.prepareHolidays();
          }, err => this.errorMessage = <any>err);
      }, err => this.errorMessage = <any>err);
  }

}
