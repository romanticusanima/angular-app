import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;
  public isLoggedIn: boolean;

  constructor(private authorizationService: AuthorizationService) { }

  getLogin() {
    this.isLoggedIn = this.authorizationService.isAuth();
  }

  ngOnInit() {
    this.user = this.authorizationService.getUser();
    this.getLogin();
  }

  ngDoCheck() {      
    this.getLogin();
  }

}
