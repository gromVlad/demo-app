import { Pipe, PipeTransform } from '@angular/core';
import { TasksInterface } from 'app/features/tasks/model/tasks.model';

@Pipe({
  name: 'taskStatusFilter',
  standalone: true,
})
export class TaskStatusFilterPipe implements PipeTransform {
  transform(
    tasks: TasksInterface,
    status: 'new' | 'in progress' | 'completed' | 'all'
  ): TasksInterface {
    if (!tasks || !status) {
      return tasks;
    }

    if (status && status !== 'all') {
      return tasks.filter((task) => task.status === status);
    }

    return tasks;
  }
}
