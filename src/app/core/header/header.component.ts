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
  public isLoggedIn: boolean = false;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.user = this.authorizationService.getUser();
    this.isLoggedIn = this.authorizationService.IsAuth();
  }

}
