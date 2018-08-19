import { Route } from '@angular/router';
import { CourseWrapperComponent } from './courses/course-wrapper/course-wrapper.component';
import { LoginComponent } from './core/login/login.component';
import { AddCoursePageComponent } from './add-course/add-course-page/add-course-page.component';
import { NoPageFoundComponent } from './core/no-page-found/no-page-found.component';
import { EditCoursePageComponent } from './add-course/edit-course-page/edit-course-page.component';

export const ROUTES: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'courses', component: CourseWrapperComponent },
    { path: 'courses/new', component: AddCoursePageComponent },
    { path: 'courses/:id', component: EditCoursePageComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //404
    { path: '**', component:  NoPageFoundComponent }
];