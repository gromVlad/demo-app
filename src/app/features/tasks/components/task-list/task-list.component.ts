import { MatListModule } from '@angular/material/list';
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
import { TaskPerformerFilterPipe } from 'app/shared/pipe/taskPerformerFilter.pipe';
import { TaskDeadlineFilterPipe } from 'app/shared/pipe/taskDeadlineFilter.pipe';
import { TaskPerformerSortPipe } from 'app/shared/pipe/taskPerformerSort.pipe';
import { TaskDeadlineSortPipe } from 'app/shared/pipe/taskDeadlineSort.pipe';
import { TaskStatusSortPipe } from 'app/shared/pipe/taskStatusSort.pipe';
import { TaskSortFilterForm } from 'app/shared/model/taskSortFilterForm.model';
import { WindowService } from '../../services/windowService.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SpinnerComponent } from 'app/shared/components/spinner/spinner.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    TaskEditComponent,
    SpinnerComponent,
    RouterModule,
    TaskStatusFilterPipe,
    TaskPerformerFilterPipe,
    TaskDeadlineFilterPipe,
    TaskPerformerSortPipe,
    TaskDeadlineSortPipe,
    TaskStatusSortPipe,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store<AppStateInterface>);
  private readonly taskSortFilterService = inject(TaskSortFilterService);
  private readonly windowService = inject(WindowService);

  selectedTask!: TaskInterface | null;
  tasks$!: Observable<TasksInterface>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  paramsFilterAndSortTasks!: TaskSortFilterForm;
  paramsFilterAndSortSubject!: Subscription;

  taskWindow!: boolean;

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
      });
  }

  fetchData(): void {
    this.store.dispatch(getTasksAction());
  }

  editTask(task: TaskInterface): void {
    this.selectedTask = task;
    this.openTaskWindowForEdit();
  }

  ngOnDestroy(): void {
    this.paramsFilterAndSortSubject.unsubscribe();
  }

  trackById(task: any): string {
    return task.id;
  }

  openTaskWindowForCreation(): void {
    this.windowService.openTaskWindowForCreation();
  }

  openTaskWindowForEdit(): void {
    this.windowService.openTaskWindowForEditing();
  }
}
