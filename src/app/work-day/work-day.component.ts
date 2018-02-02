import { Component, OnInit } from '@angular/core';
import { WorkDayCategory } from '../entities/work-day-category';
import { WorkDayService } from '../work-day.service';

@Component({
  selector: 'app-work-day',
  templateUrl: './work-day.component.html',
  styleUrls: ['./work-day.component.css']
})
export class WorkDayComponent implements OnInit {

  allWorkDayCategories: WorkDayCategory[];
  errorMessage: string;
  model: any = {};

  constructor(private workDayService: WorkDayService) { }

  ngOnInit() {
    this.workDayService.getAllWorkDayCategories()
      .subscribe(allWorkDayCategories => this.allWorkDayCategories = allWorkDayCategories, err => this.errorMessage = <any>err);
  }

  addCategory() {
    this.workDayService.addWorkDayCategory(this.model)
      .subscribe(data => {
        this.workDayService.getAllWorkDayCategories()
        .subscribe(allWorkDayCategories => this.allWorkDayCategories = allWorkDayCategories, err => this.errorMessage = <any>err);
      }, err => this.errorMessage = <any>err);

    this.model = {};
  }

}
