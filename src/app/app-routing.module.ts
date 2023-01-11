import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './todo/page-not-found/page-not-found.component';
import { TaskComponent } from './todo/task/task.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    component: HeaderComponent,
    path: 'home',
    //pathMatch: 'full',
  },
  {
    component: TodoComponent,
    path: 'todo',
  },
  {
    component: TaskComponent,
    path: 'todo/:id',
  },
  {
    component: RegisterComponent,
    path: 'login'

  },
  {
    component: PageNotFoundComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
