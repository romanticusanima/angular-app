import { Route } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';

export const ROUTES: Route[] = [
    { path: 'listing', component: TodoListComponent },
    { path: '', redirectTo: 'listing', pathMatch: 'full' }
];