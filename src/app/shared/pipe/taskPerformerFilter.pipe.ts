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

    const performerLowerCase = performer.toLowerCase();

    return tasks.filter((task) => {
      return task.performers.some((taskPerformer) => taskPerformer.toLowerCase().includes(performerLowerCase));
    });

  }
}
