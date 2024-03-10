import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },

  {
    path: 'tasks',
    loadComponent: () =>
      import('./features/myTask/myTask.component').then(
        (m) => m.MyTaskComponent
      ),
  },
  {
    path: 'tasks/:id',
    loadComponent: () =>
      import(
        './features/tasks/components/task-detail/task-detail.component'
      ).then((m) => m.TaskDetailComponent),
  },
];
