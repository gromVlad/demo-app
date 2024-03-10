import { Pipe, PipeTransform } from '@angular/core';
import { TasksInterface } from 'app/features/tasks/model/tasks.model';

@Pipe({
  name: 'taskStatusSort',
  standalone: true,
})
export class TaskStatusSortPipe implements PipeTransform {
  transform(
    tasks: TasksInterface,
    sortOrder: 'asc' | 'desc'
  ): TasksInterface {
    let copyTask = [...tasks];

    if (!copyTask || !sortOrder) {
      return tasks;
    }

    return copyTask.sort((a, b) => {
      const aStatusOrder = ['new', 'in progress', 'completed'].indexOf(
        a.status
      );
      const bStatusOrder = ['new', 'in progress', 'completed'].indexOf(
        b.status
      );

      if (sortOrder === 'asc') {
        return aStatusOrder - bStatusOrder;
      } else {
        return bStatusOrder - aStatusOrder;
      }
    });
  }
}
