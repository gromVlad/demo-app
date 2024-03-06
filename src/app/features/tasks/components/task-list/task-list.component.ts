import { RouterModule} from '@angular/router';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface, errorSelector, isLoadingSelector, tasksSelector } from '../../store/selectors';
import { getTasksAction } from '../../store/actions/getTasks.action';
import { TasksInterface } from '../../model/tasks.model';
import { CommonModule } from '@angular/common';
import { TaskInterface } from 'app/shared/services/model/task.model';
import { TaskEditComponent } from '../task-edit-component/task-edit.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskEditComponent, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  private store = inject(Store<AppStateInterface>);

  selectedTask!: TaskInterface | null;
  tasks$!: Observable<TasksInterface>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.tasks$ = this.store.select(tasksSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
  }

  fetchData(): void {
    this.store.dispatch(getTasksAction());
  }

  editTask(task: TaskInterface): void {
    this.selectedTask = task;
  }
}
