import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() arrayTodo: ITodo[] = [];

  @Output() delete = new EventEmitter<ITodo>();

  arr: ITodo[] = [];

  isTodo: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  deleteTaskChild(arr: ITodo) {
    this.delete.emit(arr);
  }

  toggleState() {
    this.isTodo = !this.isTodo;
  }
}
