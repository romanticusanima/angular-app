import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthorizationService } from '../authorization.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user;
  public isLoggedIn: boolean;
  public isUser: boolean;
  public loggedSubscription: Subscription;

  constructor(private authorizationService: AuthorizationService) { }

  getLogin() {
    this.loggedSubscription = this.authorizationService.isLoggedIn$.subscribe(result => {
      this.isLoggedIn = result
      if(this.isLoggedIn) {
        //this.getUserInfo();
      }
    });
  }

  getUserInfo() {
    const token = localStorage.getItem('userToken');
    this.authorizationService.getUser(token).subscribe(
      user => { this.user = user }
    );
  }

  ngOnInit() {
    this.getLogin();
  }

  ngOnDestroy() {
    this.loggedSubscription.unsubscribe();
  }
}
