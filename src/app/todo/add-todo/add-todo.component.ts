import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() newEvent = new EventEmitter<string>();

  public taskContent: string = '';

  constructor() {}

  ngOnInit(): void {}

  onInput(event: Event) {
    this.taskContent = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    this.newEvent.emit(this.taskContent);
  }
}
