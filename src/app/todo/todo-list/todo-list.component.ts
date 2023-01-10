import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../add-todo/models/todo';
import { ITodo } from '../interfaces/todo.interface';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() arrayTodo: Todo[] = [];

  @Output() delete = new EventEmitter<Todo>();

  public arr: Todo[] = [];

  public isTodo: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  deleteTaskChild(arr: Todo) {
    this.delete.emit(arr);
  }

  toggleState() {
    this.isTodo = !this.isTodo;
  }
}
