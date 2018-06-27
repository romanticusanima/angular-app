import { Route } from '@angular/router';
import { CourseWrapperComponent } from './courses/course-wrapper/course-wrapper.component';

export const ROUTES: Route[] = [
    { path: 'listing', component: CourseWrapperComponent },
    { path: '', redirectTo: 'listing', pathMatch: 'full' }
];