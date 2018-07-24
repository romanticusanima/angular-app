import { Route } from '@angular/router';
import { CourseWrapperComponent } from './courses/course-wrapper/course-wrapper.component';
import { LoginComponent } from './core/login/login.component';

export const ROUTES: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: 'courses', component: CourseWrapperComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];