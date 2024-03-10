import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TaskInterface } from 'app/shared/model/task.model';
import { Observable } from 'rxjs';
import { AppStateInterface, errorSelector, isLoadingSelector, taskSelector } from '../../store/selectors';
import { getTaskByIdAction } from '../../store/actions/getTaskById.actions';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SpinnerComponent } from 'app/shared/components/spinner/spinner.component';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, SpinnerComponent],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent implements OnInit {
  private readonly store = inject(Store<AppStateInterface>);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  task$!: Observable<TaskInterface | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.task$ = this.store.select(taskSelector);
  }

  fetchData(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(getTaskByIdAction({ id }));
    });
  }

  backTasks() {
    this.router.navigateByUrl('/tasks');
  }
}
