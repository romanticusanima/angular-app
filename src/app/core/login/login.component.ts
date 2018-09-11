import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoggedIn: boolean = false;
  user: any = {};

  constructor(private authorizationService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
    this.authorizationService.logout();
  }

  login() {
    this.authorizationService.login(this.user.name, this.user.password).subscribe(data => {
      this.isLoggedIn = this.authorizationService.isAuth();
      this.router.navigateByUrl('/courses');
    });
  }
}
