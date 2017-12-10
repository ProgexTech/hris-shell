import { Injectable } from '@angular/core';
import { User } from './entities/user';

@Injectable()
export class UserService {

  constructor() { }

  getAllUsers(): User[] {
    const users: User[] = [
      {id: 1, userName: "shan"},
      {id: 2, userName: "kamal"},
      {id: 3, userName: "anura"}      
    ];
    return users;
  }

}
