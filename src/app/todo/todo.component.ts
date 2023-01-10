import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ITodo } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service';
import { Todo } from './add-todo/models/todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnDestroy {
  private _taskSubscription!: Subscription;

  public todoArray: Todo[] = [];

  constructor(private _todoService: TodoService) {
    console.log('Nuova istanza creta per TaskList');
  }

  /**
   * Inizializzo qui il mio array di task
   */
  ngOnInit(): void {
    this._taskSubscription = this._todoService._getAll().subscribe((tasks) => {
      this.todoArray = tasks;
    });
  }

  ngOnDestroy(): void {
    this._taskSubscription.unsubscribe();
  }

  deleteTask(todo: Todo) {
    /*
    this._todoService.deleteOne(todo.id);
    this.todoArray = this._todoService.getAll();
    */
    this._taskSubscription = this._todoService._deleteOne(todo.id).subscribe();
  }

  addTask(label: string) {
    /*
    this._todoService.createOne(label);
    //this.todoArray = this.todoService.getAll().map(todo => todo.label);
    this.todoArray = this._todoService.getAll();
    */
    this._taskSubscription = this._todoService
      ._createOne(label)
      .subscribe((task) => this.todoArray.push(task));
    console.log('ADD Task from Service(Ob)');
    console.log(this.todoArray);
  }
}
