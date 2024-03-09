import { Pipe, PipeTransform } from '@angular/core';
import { TasksInterface } from 'app/features/tasks/model/tasks.model';

@Pipe({
  name: 'taskPerformerFilter',
  standalone: true,
})
export class TaskPerformerFilterPipe implements PipeTransform {
  transform(tasks: TasksInterface, performer: string): TasksInterface {
    if (!tasks || !performer) {
      return tasks;
    }

    return tasks.filter((task) => task.performers.includes(performer));
  }
}
