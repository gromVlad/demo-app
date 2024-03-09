import { Injectable } from '@angular/core';
import { TasksInterface } from '../model/tasks.model';
import { Observable, filter, map, of, tap } from 'rxjs';
import { TaskInterface } from 'app/shared/model/task.model';

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
          deadline: new Date('2024-03-13'),
          priority: 1,
          status: 'new',
          performers: ['John Doe'],
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description for task 2',
          deadline: new Date('2024-03-12'),
          priority: 2,
          status: 'in progress',
          performers: ['Jane Doe'],
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'Description for task 3',
          deadline: new Date('2029-04-12'),
          priority: 3,
          status: 'completed',
          performers: ['John Doe', 'Jane Doe'],
        },
      ];

      localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
      return of(tasks);
    }
  }

  createTask(task: TaskInterface): Observable<TaskInterface> {
    let tasks: TasksInterface = [];

    this.getTasks().subscribe((res) => {
      tasks = res;
    });
    tasks.push(task);
    this.saveTasks(tasks);

    return of(task);
  }

  saveTasks(tasks: TasksInterface): void {
    localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
  }

  updateTask(task: TaskInterface): Observable<TaskInterface> {
    return this.getTasks().pipe(
      map((tasks) => {
        const index = tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          tasks[index] = task;
        }
        return tasks;
      }),
      tap((updatedTasks) => this.saveTasks(updatedTasks)),
      map(() => task)
    );
  }

  getTaskById(id: string): Observable<TaskInterface> {
    return this.getTasks().pipe(
      map((tasks: TasksInterface) =>
        tasks.find((task: TaskInterface) => task.id === +id)
      ),
      filter(
        (task: TaskInterface | undefined): task is TaskInterface =>
          task !== undefined
      )
    );
  }
}
