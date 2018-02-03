import { Component, OnInit } from '@angular/core';
import { WorkDayCategory } from '../entities/work-day-category';
import { WorkDayService } from '../work-day.service';
import { WorkDay } from '../entities/work-day';

@Component({
  selector: 'app-work-day',
  templateUrl: './work-day.component.html',
  styleUrls: ['./work-day.component.css']
})
export class WorkDayComponent implements OnInit {

  allWorkDayCategories: WorkDayCategory[];
  allWorkDays: WorkDay[];
  errorMessage: string;
  workDayCategoryModel: any = {};
  workDayModel: any = {};

  constructor(private workDayService: WorkDayService) { }

  ngOnInit() {

    this.workDayModel.startTime = new Date();
    this.workDayModel.startTime.setSeconds(0,0);
    this.workDayModel.endTime = new Date();
    this.workDayModel.endTime.setSeconds(0,0);

    this.workDayService.getAllWorkDayCategories()
      .subscribe(allWorkDayCategories => {
        this.allWorkDayCategories = allWorkDayCategories;
        if (allWorkDayCategories) {
          this.workDayModel.workDayCategory = allWorkDayCategories[0];
        }
      }, err => this.errorMessage = <any>err);
    this.workDayService.getAllWorkDays()
      .subscribe(allWorkDays=> this.allWorkDays = allWorkDays, err => this.errorMessage = <any>err);
  }

  addCategory() {
    this.workDayService.addWorkDayCategory(this.workDayCategoryModel)
      .subscribe(data => {
        this.workDayService.getAllWorkDayCategories()
        .subscribe(allWorkDayCategories => this.allWorkDayCategories = allWorkDayCategories, err => this.errorMessage = <any>err);
      }, err => this.errorMessage = <any>err);

    this.workDayCategoryModel = {};
  }

  addWorkDay() {
    //console.log("called : "+ JSON.stringify(this.workDayModel));
    this.workDayService.addWorkDay(this.workDayModel)
      .subscribe(data => {
        this.workDayService.getAllWorkDays()
          .subscribe(allWorkDays=> this.allWorkDays = allWorkDays, err => this.errorMessage = <any>err);
      }, err => {
      this.errorMessage = <any>err;
      console.log(this.errorMessage);
      });
  }

}
