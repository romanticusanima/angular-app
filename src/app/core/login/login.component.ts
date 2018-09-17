import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public getState: Observable<any>;
  public isLoggedIn: Observable<boolean>;
  public errors: string;
  public submitted: boolean = false;
  
  userForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private store: Store<AppState>) {
                this.getState = this.store.select(selectAuthState);
              }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isLoggedIn = state.isLoggedIn;
      this.errors = state.errorMessage;
    });
  }

  get form() { return this.userForm.controls }

  submit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.store.dispatch(new LogIn(this.userForm.value));
  }
}
