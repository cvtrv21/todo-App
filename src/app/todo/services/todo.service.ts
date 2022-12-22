import { Injectable } from '@angular/core';
import { takeLast } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  private todos: Todo[] = [];

  private count = 0;

  public getAll(): Todo[] {
    return this.todos;
  }

  public getOne(id: number): Todo | null {
    return this.todos[id];
  }

  public createOne(task: string): Todo {
    this.todos.push({
      id: this.count,
      label: task,
    });

    console.log('Add Task from Service');
    console.log(this.todos);

    this.count++;
    //return { id: this.todos.length, label: task };
    return { id: this.count, label: task };
  }

  public deleteOne(id: number): void {
    this.todos = this.todos.filter((todo) => id !== todo.id);
    console.log('Delete from Service');
    console.log(this.todos);

    //const i = this.todos.findIndex(todo=> todo.id === id);
  }
}
