import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public users: User[] = [];

  constructor(private getUsers: UsersService) { }

  ngOnInit() {
    this.users = this.getUsers.getUsers();
  }

}
