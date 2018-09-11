import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user;
  public isLoggedIn: boolean;
  public isUser: boolean;

  constructor(private authorizationService: AuthorizationService) { }

  getLogin() {
    this.isLoggedIn = this.authorizationService.isAuth();
    if(this.isLoggedIn) {
     // const token = localStorage.getItem('userToken');
      this.authorizationService.getUser().subscribe(
        user => { this.user = user }
      );
    }
  }

  ngOnInit() {
    this.getLogin();
  }
}
