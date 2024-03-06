import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/tasks/components/task-list/task-list.component').then(
        (m) => m.TaskListComponent
      ),
  },
];
