import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public user: User;
  public isLoggedIn: boolean;

  constructor(private authorizationService: AuthorizationService, 
              private router: Router) { }

  ngOnInit() {
  }

  Loguot() {
    this.isLoggedIn = this.authorizationService.logout();
    this.router.navigateByUrl('/login');
  }

}
