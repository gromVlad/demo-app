import { RouterModule } from '@angular/router';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  AppStateInterface,
  errorSelector,
  isLoadingSelector,
  tasksSelector,
} from '../../store/selectors';
import { getTasksAction } from '../../store/actions/getTasks.action';
import { TasksInterface } from '../../model/tasks.model';
import { CommonModule } from '@angular/common';
import { TaskInterface } from 'app/shared/model/task.model';
import { TaskEditComponent } from '../task-edit-component/task-edit.component';
import { TaskSortFilterService } from '../../services/sortAndFilter.service';
import { TaskStatusFilterPipe } from 'app/shared/pipe/taskStatusFilter.pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    TaskEditComponent,
    RouterModule,
    TaskStatusFilterPipe,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit, OnDestroy {
  private store = inject(Store<AppStateInterface>);
  private taskSortFilterService = inject(TaskSortFilterService);

  selectedTask!: TaskInterface | null;
  tasks$!: Observable<TasksInterface>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  paramsFilterAndSortTasks: any;
  paramsFilterAndSortSubject!: Subscription;

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.tasks$ = this.store.select(tasksSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.paramsFilterAndSortSubject = this.taskSortFilterService
      .getData()
      .subscribe((data) => {
        this.paramsFilterAndSortTasks = data;
        console.log('====================================');
        console.log(data);
        console.log('====================================');
      });
  }

  fetchData(): void {
    this.store.dispatch(getTasksAction());
  }

  editTask(task: TaskInterface): void {
    this.selectedTask = task;
  }

  ngOnDestroy(): void {
    this.paramsFilterAndSortSubject.unsubscribe();
  }
}
