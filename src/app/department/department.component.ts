import { Component, OnInit } from '@angular/core';
import { Department } from '../entities/department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  allDepartments: Department[];
  errorMessage: string;
  model: any = {};

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getAllDepartments()
      .subscribe(departments => this.allDepartments = departments, err => this.errorMessage = <any>err);
  }

  addDepartment() {
    this.departmentService.addDepartment(this.model)
      .subscribe(data => {
        this.departmentService.getAllDepartments()
          .subscribe(departments => this.allDepartments = departments, err => this.errorMessage = <any>err);
      },err => this.errorMessage = <any>err);

    this.model = {};
  }

}
