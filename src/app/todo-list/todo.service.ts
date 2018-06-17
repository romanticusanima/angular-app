import { Injectable } from '@angular/core';
import { TodoListItem } from './todo-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public getTodoItems(): TodoListItem[] {
    return [
      {
        id: 1,
        title: 'Video Course #1',
        creationDate: '02/03/2017',
        duration: '1h 20min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 2,
        title: 'Video Course #2',
        creationDate: '17/09/2017',
        duration: '3h 40min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 3,
        title: 'Video Course #3',
        creationDate: '05/11/2017',
        duration: '45min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 4,
        title: 'Video Course #4',
        creationDate: '12/02/2018',
        duration: '1h 50min',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 5,
        title: 'Video Course #5',
        creationDate: '04/05/2018',
        duration: '2h',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ];
  }
}
