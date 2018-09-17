import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { UserComponent } from './header/user/user.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AuthorizationService } from './authorization.service';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../store/effects/auth.effects';
import { reducers } from '../store/app.states';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [
    AuthorizationService
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LogoComponent, 
    UserComponent, 
    BreadcrumbsComponent, 
    LoginComponent, 
    NoPageFoundComponent
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    LogoComponent, 
    UserComponent, 
    BreadcrumbsComponent, 
    LoginComponent, 
    NoPageFoundComponent
  ]
})
export class CoreModule { }
