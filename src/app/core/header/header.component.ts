import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public users: User[] = [
    {
      id: 1,
      firstName: 'Nastya',
      lastName: 'Malai'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
