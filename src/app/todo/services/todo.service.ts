import { Injectable } from '@angular/core';
import { Observable, takeLast } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {
    console.log('TASK SERVICE CREATED');
  }

  private todos: ITodo[] = [];

  private count = 0;

  public getAll(): ITodo[] {
    return this.todos;
  }

  public getOne(id: number): ITodo | null {
    return this.todos[id];
  }

  public createOne(task: string): ITodo {
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
