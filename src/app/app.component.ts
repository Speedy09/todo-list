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

  onEditMode() {
    this.editMode = !this.editMode;
    console.log(this.editMode)
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadLine: this.taskDate,
      done: false
    }
    this.tasks.push(task);
    this.editMode = false;
    this.taskName = '';
    this.taskDate = '';
  }

  deleteTask(task: ) {
    this.tasks = this.tasks.filter(e => e !== task);
  }

  markTaskAsDone(task: Task) {
    task.done = true;
  }

  onClear() {
    this.tasks = [];
  }
}
