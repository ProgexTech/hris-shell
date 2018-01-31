import { Component, OnInit } from '@angular/core';
import { DesignationService } from '../designation.service';
import { UserService } from '../user.service';
import { DepartmentService } from '../department.service';
import { RoleService } from '../role.service';
import { Designation } from '../entities/designation';
import { User } from '../entities/user';
import { Department } from '../entities/department';
import { Role } from '../entities/role';

@Component({
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  allUsers: User[];
  allRoles: Role[];
  allDepartments: Department[];
  allDesignations: Designation[];
  errorMessage: string;
  model: any = {};

  //selectedRole: Role;
  //selectedDepartment: Department;

  constructor(
    private userService: UserService,
    private departmentService: DepartmentService,
    private roleService: RoleService,
    private designationService: DesignationService ) 
  { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(users => this.allUsers = users, err => this.errorMessage = <any>err);

    this.departmentService.getAllDepartments()
      .subscribe(departments => { 
        this.allDepartments = departments; 
        if (departments) {
          //this.selectedDepartment = departments[0];
          this.model.department = departments[0];
        }
      }, err => this.errorMessage = <any>err);

    this.roleService.getAllRoles()
      .subscribe(roles => { 
        this.allRoles = roles; 
        if (roles) {
          //this.selectedRole = roles[0];
          this.model.role = roles[0];
        }
      }, err => this.errorMessage = <any>err);

    this.designationService.getAllDesignations()
      .subscribe(designations => {
        this.allDesignations = designations;
        if (designations) {
          this.model.designation = designations[0];
        }
      }, err => this.errorMessage = <any>err);
  }

  addUser() {
    this.userService.addUser(this.model);
    this.model = {};
  }

  onSelectRole(role) {
    this.model.role = role;
  }

  onSelectDepartment(department) {
    this.model.department = department;
  }

  onSelectDesignation(designation) {
    this.model.designation = designation;
  }

}
