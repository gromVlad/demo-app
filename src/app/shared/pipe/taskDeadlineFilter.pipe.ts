import { Pipe, PipeTransform } from '@angular/core';
import { TasksInterface } from 'app/features/tasks/model/tasks.model';

@Pipe({
  name: 'taskDeadlineFilter',
  standalone: true,
})
export class TaskDeadlineFilterPipe implements PipeTransform {
  transform(tasks: TasksInterface, dateFilter: string): TasksInterface {
    if (!tasks || !dateFilter) {
      return tasks;
    }

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const thisWeek = new Date();
    thisWeek.setDate(today.getDate() + 7);
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 14);

    switch (dateFilter) {
      case 'today':
        return tasks.filter((task) => {
          const taskDate = new Date(task.deadline);
          return taskDate.getDate() === today.getDate();
        });
      case 'tomorrow':
        return tasks.filter((task) => {
          const taskDate = new Date(task.deadline);
          return taskDate.getDate() === tomorrow.getDate();
        });
      case 'this week':
        return tasks.filter((task) => {
          const taskDate = new Date(task.deadline);
          return taskDate >= today && taskDate < thisWeek;
        });
      case 'next week':
        return tasks.filter((task) => {
          const taskDate = new Date(task.deadline);
          return taskDate >= nextWeek;
        });
      case 'overdue':
        return tasks.filter((task) => {
          const taskDate = new Date(task.deadline);
          return taskDate < today;
        });
      default:
        return tasks;
    }
  }
}