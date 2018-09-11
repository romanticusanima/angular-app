import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: string[] = [];

  constructor (private router: Router) { }

  ngOnInit() {
    this.getBreabcrumbs();
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

}
