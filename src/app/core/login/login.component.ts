import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../shared/loader/loader.service';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoggedIn: Observable<boolean>;
  public alert: boolean = false;
  user: any = {};

  constructor(private authorizationService: AuthorizationService,
              private router: Router,
              private loader: LoaderService) { }

  ngOnInit() { }

  login() {
    this.loader.display(true);
    this.authorizationService.login(this.user.name, this.user.password)
      .subscribe(data => {
        this.isLoggedIn = this.authorizationService.isAuth();
        this.router.navigateByUrl('/courses');
      },
      error => { 
        this.loader.display(false); 
        this.alert = true;
        throwError(error);
      },
      () => { 
        this.loader.display(false); 
        this.alert = false;
      })
  }
}
