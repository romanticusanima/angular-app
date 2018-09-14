import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { AuthorizationService } from '../authorization.service';

class MockServices {
  public url = 'http://localhost:4200';
  public ne = new NavigationEnd(0, this.url, null); 
  public events = new Observable(observer => { 
    observer.next(this.ne); 
    observer.complete(); 
  });
}

let authorizationService: Partial<AuthorizationService>;

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  let router: Partial<Router>;

  beforeEach(async(() => {
    router = { navigate: jasmine.createSpy('navigate') };

    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent ],
      providers: [
        {provide: Router, useClass: MockServices},
        {provide: AuthorizationService, useValue: authorizationService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    router.navigate(['/courses']);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
