import { Pipe, PipeTransform } from '@angular/core';
import { TasksInterface } from 'app/features/tasks/model/tasks.model';

@Pipe({
  name: 'taskDeadlineSort',
  standalone: true,
})
export class TaskDeadlineSortPipe implements PipeTransform {
  transform(
    tasks: TasksInterface,
    sortOrder?: 'asc' | 'desc'
  ): TasksInterface {
    let copyTask = [...tasks];

    if (!copyTask || !sortOrder) {
      return copyTask;
    }

    return copyTask.sort((a, b) => {
      if (sortOrder === 'asc') {
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      } else {
        return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
      }
    });
  }
}
