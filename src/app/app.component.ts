import { Component } from '@angular/core';
import { Todo } from './todo'; // can ignore .ts ext

@Component({
  selector: 'app-root', // injection point
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularCrashy'; // only var
  todoValue: string;
  list: Todo[];

  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }

  addItem() {
    if (this.todoValue !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newItem); // add todo to list
    }
    this.todoValue = ''; // reset input to empty
  }

  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
