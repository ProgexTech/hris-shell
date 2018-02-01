import { Component, OnInit } from '@angular/core';
import { Role } from '../entities/role';
import { RoleService } from '../role.service';
import { Permission } from '../entities/permssion';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  allRoles: Role[];
  allPermissions: Permission[] = [];
  selectedPermissions: Permission[] = [];
  errorMessage: string;
  model: any = {};
  selectedPermToAdd: Permission;
  selectedPermToRemove: Permission;

  constructor(private roleService: RoleService, private permissionService: PermissionService) { }

  ngOnInit() {
    this.roleService.getAllRoles()
      .subscribe(allRoles => this.allRoles = allRoles, err => this.errorMessage = <any>err);
    this.permissionService.getAllPermissions()
      .subscribe(permissions => {
        this.allPermissions = permissions; 
        if (permissions) {
          this.selectedPermToAdd = permissions[0];
        }
      }, err => this.errorMessage = <any>err);
  }

  addRole() {
    this.model.permission = this.selectedPermissions;
    this.roleService.addRole(this.model)
      .subscribe(data => {
        this.roleService.getAllRoles()
        .subscribe(allRoles => this.allRoles = allRoles, err => this.errorMessage = <any>err);
      }, err => this.errorMessage = <any>err);

    this.model = {};
  }

  onSelectAdd(perm) {
    this.selectedPermToAdd = perm;
  }

  addToSelectedPermissionList() {
    if (this.selectedPermToAdd != undefined) {
      var index = this.selectedPermissions.indexOf(this.selectedPermToAdd, 0);
      if (index == -1) {
        this.selectedPermissions.push(this.selectedPermToAdd);
      }
    }
  }

  onSelectRemove(perm) {
    this.selectedPermToRemove = perm;
  }
 
  removeFromSelectedPermissionList() {
    if (this.selectedPermToRemove != undefined) {
      var index = this.selectedPermissions.indexOf(this.selectedPermToRemove, 0);
      if (index > -1) {
        this.selectedPermissions.splice(index, 1);
      }
    }
  }
}
