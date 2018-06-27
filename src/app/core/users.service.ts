import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()

export class UsersService {

  constructor() { }

  public getUser(): User[] {
    return [
      {
        id: 1,
        firstName: 'Nastya',
        lastName: 'Malai'
      }
    ]
  }
}
