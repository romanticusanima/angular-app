import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { UserComponent } from './header/user/user.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AuthorizationService } from './authorization.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthorizationService],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, UserComponent, BreadcrumbsComponent, LoginComponent],
  exports: [HeaderComponent, FooterComponent, LogoComponent, UserComponent, BreadcrumbsComponent, LoginComponent]
})
export class CoreModule { }
