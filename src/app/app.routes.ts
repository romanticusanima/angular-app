import { Route } from '@angular/router';
import { CourseWrapperComponent } from './courses/course-wrapper/course-wrapper.component';
import { LoginComponent } from './core/login/login.component';
import { AddCoursePageComponent } from './add-course/add-course-page/add-course-page.component';

export const ROUTES: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'courses', component: CourseWrapperComponent },
    { path: 'add', component: AddCoursePageComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];