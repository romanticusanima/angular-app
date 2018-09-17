import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.states';
import { LogOut } from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public user: User;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  Loguot() {
    this.store.dispatch(new LogOut);
  }

}
