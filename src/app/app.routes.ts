
import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./features/tasks/components/task-list/task-list.component').then(
  //       (m) => m.TaskListComponent
  //     ),
  // },

  {
    path: '',
    loadComponent: () =>
      import('./demo/demo.component').then((m) => m.DemoComponent),
  },
  {
    path: 'task/:id',
    loadComponent: () =>
      import(
        './features/tasks/components/task-detail/task-detail.component'
      ).then((m) => m.TaskDetailComponent),
  },
];
