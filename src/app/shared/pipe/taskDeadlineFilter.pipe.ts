import { Pipe, PipeTransform } from '@angular/core';
import { TasksInterface } from 'app/features/tasks/model/tasks.model';

@Pipe({
  name: 'taskDeadlineFilter',
  standalone: true,
})
export class TaskDeadlineFilterPipe implements PipeTransform {
  transform(tasks: TasksInterface, deadline: Date): TasksInterface {
    if (!tasks || !deadline) {
      return tasks;
    }

    return tasks.filter(
      (task) =>
        new Date(task.deadline).getDate() === new Date(deadline).getDate()
    );
  }
}
