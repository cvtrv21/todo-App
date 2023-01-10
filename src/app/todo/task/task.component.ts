import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../add-todo/models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  public task!: Todo;

  constructor(
    private _taskService: TodoService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._taskService
      ._getOne(+this._route.snapshot.paramMap.get('id')!)
      .subscribe((task) => (this.task = task));
  }
}
