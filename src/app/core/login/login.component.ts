import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  Login() {
    this.isLoggedIn = this.authorizationService.Login();
    console.log("you logged in succesfully");
  }

}
