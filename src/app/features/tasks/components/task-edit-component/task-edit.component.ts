import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TaskInterface } from 'app/shared/model/task.model';
import { AppStateInterface } from '../../store/selectors';
import { updateTaskAction } from '../../store/actions/updateTask.action';
import { WindowService } from '../../services/windowService.service';
import { Subscription } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
  ],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss',
})
export class TaskEditComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(Store<AppStateInterface>);
  private readonly windowService = inject(WindowService);

  @Input() task!: TaskInterface;
  taskForm!: FormGroup;
  taskWindow!: boolean;
  private subscription!: Subscription;

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    const performers = this.task.performers.join(',');

    this.taskForm = this.fb.group({
      status: [this.task.status, Validators.required],
      performers: [performers, Validators.required],
    });

    this.subscription = this.windowService.taskWindow$.subscribe((window) => {
      this.taskWindow = window.changeTask;
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const updatedTask: TaskInterface = {
        ...this.task,
        ...this.taskForm.value,
        performers: this.taskForm.value['performers'].split(','),
      };

      this.store.dispatch(updateTaskAction({ task: updatedTask }));
      this.closeTaskWindowForEdit();
    }
  }

  closeTaskWindowForEdit(): void {
    this.windowService.closeTaskWindow();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
