import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITodo } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoArray: ITodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
  }

  deleteTask(todo: ITodo) {
    this.todoService.deleteOne(todo.id);
    this.todoArray = this.todoService.getAll();
  }

  addTask(value: string) {
    this.todoService.createOne(value);
    //this.todoArray = this.todoService.getAll().map(todo => todo.label);
    this.todoArray = this.todoService.getAll();
  }
}
