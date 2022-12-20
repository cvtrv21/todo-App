import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todoArray : string [] = [];

  constructor() {}


  ngOnInit(): void {
  }

  deleteTask(value : number) {
    this.todoArray.splice(value, 1);
  }

  addTask(value : string) {
    this.todoArray = [value, ...this.todoArray];
   //this.todoArray.push(value);
  }

}
