import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginComponent } from './header/login/login.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [UsersService],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, LoginComponent, BreadcrumbsComponent],
  exports: [HeaderComponent, FooterComponent, LogoComponent, LoginComponent, BreadcrumbsComponent]
})
export class CoreModule { }
