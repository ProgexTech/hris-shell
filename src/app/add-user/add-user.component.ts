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

  allRoles: Role[];
  allDepartments: Department[];
  allDesignations: Designation[];
  errorMessage: string;
  model: any = {};

  ph_home: string;
  ph_mobile: string;
  ph_office: string;

  constructor(
    private userService: UserService,
    private departmentService: DepartmentService,
    private roleService: RoleService,
    private designationService: DesignationService ) 
  { }

  ngOnInit() {
    this.departmentService.getAllDepartments()
      .subscribe(departments => { 
        this.allDepartments = departments; 
        if (departments) {
          this.model.departmentId = departments[0].id;
        }
      }, err => this.errorMessage = <any>err);

    this.roleService.getAllRoles()
      .subscribe(roles => { 
        this.allRoles = roles; 
        if (roles) {
          this.model.roleId = roles[0].id;
        }
      }, err => this.errorMessage = <any>err);

    this.designationService.getAllDesignations()
      .subscribe(designations => {
        this.allDesignations = designations;
        if (designations) {
          this.model.designationId = designations[0].id;
        }
      }, err => this.errorMessage = <any>err);
  }

  addUser() {
    var cnt = 0;
    if (this.ph_home) { cnt++; }
    if (this.ph_mobile) { cnt++; }
    if (this.ph_office) { cnt++; }
    //console.log(cnt);

    var contacts: any[] = new Array(cnt);
    cnt = 0;
    if (this.ph_home) {
      contacts[cnt++] = {"type": "HOME", "number": this.ph_home};
    }
    if (this.ph_mobile) {
      contacts[cnt++] = {"type": "MOBILE", "number": this.ph_mobile};
    }
    if (this.ph_office) {
      contacts[cnt++] = {"type": "OFFICE", "number": this.ph_office};
    }

    this.model.contacts = contacts;
    //console.log( JSON.stringify(contacts));
    this.userService.addUser(this.model);
    this.model = {};
  }

  onSelectRole(role) {
    this.model.roleId = role.id;
  }

  onSelectDepartment(department) {
    this.model.departmentId = department.id;
  }

  onSelectDesignation(designation) {
    this.model.designationId = designation.id;
  }

}
