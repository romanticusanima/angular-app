import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginComponent } from './header/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, LoginComponent],
  exports: [HeaderComponent, FooterComponent, LogoComponent, LoginComponent]
})
export class CoreModule { }
