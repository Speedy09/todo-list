import { Component } from '@angular/core';
import { Task } from './task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';

  taskName: string;
  taskDate: string;
  editMode = false;

  tasks: Task[] = [
    {
      name: 'Fitness',
      deadLine: new Date().toLocaleDateString(),
      done: false
    },
    {
      name: 'Housekeeping',
      deadLine: new Date().toLocaleDateString(),
      done: false
    }
  ]
}
