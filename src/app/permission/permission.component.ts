import { Component, OnInit } from '@angular/core';
import { Permission } from '../entities/permssion';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  allPermissions: Permission[];
  errorMessage: string;
  model: any = {};

  constructor(private permissionService: PermissionService) { }

  ngOnInit() {
    this.permissionService.getAllPermissions()
      .subscribe(permissions => this.allPermissions = permissions, err => this.errorMessage = <any>err);
  }

  addPermission() {
    this.permissionService.addPermission(this.model)
      .subscribe(data => {
        this.permissionService.getAllPermissions()
        .subscribe(permissions => this.allPermissions = permissions, err => this.errorMessage = <any>err);
      },err => this.errorMessage = <any>err);

    this.model = {};
  }

}
