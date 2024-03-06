import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskFormComponent } from 'app/features/tasks/components/task-form/task-form.component';
import { TaskListComponent } from 'app/features/tasks/components/task-list/task-list.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule,TaskListComponent,TaskFormComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {

}
