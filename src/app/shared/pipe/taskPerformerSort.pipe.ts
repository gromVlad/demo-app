import { Pipe, PipeTransform } from "@angular/core";
import { TasksInterface } from "app/features/tasks/model/tasks.model";


@Pipe({
  name: 'taskPerformerSort',
  standalone: true,
})
export class TaskPerformerSortPipe implements PipeTransform {
  transform(
    tasks: TasksInterface,
    sortOrder: 'asc' | 'desc'
  ): TasksInterface {
    let copyTask = [...tasks]

    if (!copyTask || !sortOrder) {
      return copyTask;
    }

    return copyTask.sort((a, b) => {
      const aPerformers = a.performers
        .map((performer) => performer.toLowerCase())
        .sort();
      const bPerformers = b.performers
        .map((performer) => performer.toLowerCase())
        .sort();

      if (sortOrder === 'asc') {
        return aPerformers.join(',') > bPerformers.join(',') ? 1 : -1;
      } else {
        return bPerformers.join(',') > aPerformers.join(',') ? 1 : -1;
      }
    });

  }
}
