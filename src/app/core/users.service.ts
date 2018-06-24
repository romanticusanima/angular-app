import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getUsers(): User[] {
    return [
      {
        id: 1,
        firstName: 'Nastya',
        lastName: 'Malai'
      }
    ]
  }
}
