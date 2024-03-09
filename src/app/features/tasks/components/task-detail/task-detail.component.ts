import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TaskInterface } from 'app/shared/model/task.model';
import { Observable } from 'rxjs';
import { AppStateInterface, taskSelector } from '../../store/selectors';
import { getTaskByIdAction } from '../../store/actions/getTaskById.actions';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent {
  private store = inject(Store<AppStateInterface>);
  private route = inject(ActivatedRoute);

  task$!: Observable<TaskInterface | null>;

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.task$ = this.store.select(taskSelector);
  }

  fetchData(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(getTaskByIdAction({ id }));
    });
  }
}
