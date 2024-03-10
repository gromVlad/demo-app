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
