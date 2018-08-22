import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CoursesListModule } from './courses/courses-list.module';
import { AddCourseModule } from './add-course/add-course.module';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    CoursesListModule,
    AddCourseModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})

export class AppModule { }
