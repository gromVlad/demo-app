import { Pipe, PipeTransform } from '@angular/core';
import { TasksInterface } from 'app/features/tasks/model/tasks.model';

@Pipe({
  name: 'taskStatusSort',
  standalone: true,
})
export class TaskStatusSortPipe implements PipeTransform {
  transform(tasks: TasksInterface): TasksInterface {
    if (!tasks) {
      return tasks;
    }

    return tasks.sort((a, b) => a.status.localeCompare(b.status));
  }
}
