import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public isLoggedIn: boolean;
  public breadcrumbs: string[] = [];
  public loggedSubscription: Subscription;

  constructor (private router: Router,
               private authorizationService: AuthorizationService) { }


  ngOnInit() {
    this.loggedSubscription = this.authorizationService.isLoggedIn$.subscribe(result => {
      this.isLoggedIn = result
      if(this.isLoggedIn) {
        this.getBreabcrumbs();
      }
    });
  }
  
  getBreabcrumbs() {
    this.router.events.subscribe((evt) => {
      this.breadcrumbs = [];
      if (!(evt instanceof NavigationEnd)) {
        return false;
      }
      const url = evt.url;
      if (url === '' || url === '/') {
        this.breadcrumbs.length = 0;
      } else {
        this.breadcrumbs.push(evt.url.substr(1));
      }
    });
  }

  ngOnDestroy() {
    this.loggedSubscription.unsubscribe();
  }

}
