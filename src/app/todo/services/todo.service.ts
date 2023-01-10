import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Todo } from '../add-todo/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private _http: HttpClient) {
    console.log('TASK SERVICE CREATED');
  }

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

  //------------------------------------------------------------------------Metodi Observable

  /**
   * GET: Return all the tasks by JSON
   * @returns
   */
  public _getAll(): Observable<Todo[]> {
    /**
     *  1o Argometo
     *  2o Body
     */
    return this._http
      .get<ITodo[]>('http://localhost:3000/todo')
      .pipe(map((tasks) => tasks.map((task) => new Todo(task.id, task.label))));
  }

  public _getOne(id: number): Observable<Todo> {
    return this._http
      .get<ITodo>(`http://localhost:3000/todo/${id}`)
      .pipe(map((tasks) => new Todo(tasks.id, tasks.label)));
  }

  /**
   * POST: add new task to the JSON
   * @param labels
   * @returns
   */
  public _createOne(labels: string): Observable<Todo> {
    return this._http.post<ITodo>('http://localhost:3000/todo', {
      id: this.count,
      label: labels,
    });
  }

  public _deleteOne(id: number): Observable<Todo> {
    return this._http.delete<ITodo>(`http://localhost:3000/todo/${id}`);
  }
}
