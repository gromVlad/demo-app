import { Injectable } from "@angular/core";
import { TasksInterface } from "../model/tasks.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private tasksKey = 'tasks';

  constructor() {}

  getTasks(): Observable<TasksInterface> {
    const tasksJson = localStorage.getItem(this.tasksKey);
    if (tasksJson) {
      return of(JSON.parse(tasksJson));
    } else {
      // for test
      const tasks: TasksInterface = [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description for task 1',
          deadline: new Date(),
          priority: 1,
          status: 'new',
          performers: ['John Doe'],
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description for task 2',
          deadline: new Date(),
          priority: 2,
          status: 'in progress',
          performers: ['Jane Doe'],
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'Description for task 3',
          deadline: new Date(),
          priority: 3,
          status: 'completed',
          performers: ['John Doe', 'Jane Doe'],
        },
      ];

      localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
      return of(tasks);
    }
  }

  saveTasks(tasks: TasksInterface): void {
    localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
  }
}
