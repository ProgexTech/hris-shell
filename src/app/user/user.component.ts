import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../entities/user';

@Component({  
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  allUsers: User[];
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(users => this.allUsers = users, err => this.errorMessage = <any>err);
  }

}
