import { Pipe, PipeTransform } from '@angular/core';
import { TasksInterface } from 'app/features/tasks/model/tasks.model';

@Pipe({
  name: 'taskPerformerSort',
  standalone: true,
})
export class TaskPerformerSortPipe implements PipeTransform {
  transform(tasks: TasksInterface): TasksInterface {
    if (!tasks) {
      return tasks;
    }

    return tasks.sort((a, b) => {
      const aPerformers = a.performers.join(',');
      const bPerformers = b.performers.join(',');

      return aPerformers.localeCompare(bPerformers);
    });
  }
}
