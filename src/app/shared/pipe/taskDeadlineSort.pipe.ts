import { Pipe, PipeTransform } from '@angular/core';
import { TasksInterface } from 'app/features/tasks/model/tasks.model';

@Pipe({
  name: 'taskDeadlineSort',
  standalone: true,
})
export class TaskDeadlineSortPipe implements PipeTransform {
  transform(tasks: TasksInterface): TasksInterface {
    if (!tasks) {
      return tasks;
    }

    return tasks.sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
  }
}
