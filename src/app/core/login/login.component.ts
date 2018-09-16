import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../shared/loader/loader.service';
import { throwError, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoggedIn: Observable<boolean>;
  public alert: boolean = false;
  public submitted: boolean = false;
  
  userForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authorizationService: AuthorizationService,
              private router: Router,
              private loader: LoaderService) { }

  ngOnInit() { }

  get form() { return this.userForm.controls }

  submit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.loader.display(true);
    this.authorizationService.login(this.userForm.value)
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
