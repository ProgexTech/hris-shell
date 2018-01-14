import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../entities/user';

@Component({
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;
  model: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addUser() {
    this.user = this.model;
    this.userService.addUser(this.user);
    this.model = {};
  }

}
