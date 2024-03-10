import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { createTaskAction } from '../../store/actions/addTask.actions';
import { TaskInterface } from 'app/shared/model/task.model';
import { GenerateUniqueId } from 'app/shared/utils/generateUniqueId.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { WindowService } from '../../services/windowService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private store = inject(Store<AppStateInterface>);
  private generateUniqueId = inject(GenerateUniqueId);
  private windowService = inject(WindowService);
  private subscription!: Subscription;

  taskWindow!: boolean
  taskForm!: FormGroup;

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      deadline: [''],
      priority: [1, Validators.min(1)],
      status: ['new'],
      performers: [''],
    });
    this.subscription = this.windowService.taskWindow$.subscribe((window) => {
      this.taskWindow = window.createTask;
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const task: TaskInterface = {
        ...this.taskForm.value,
        id: this.generateUniqueId.getId(),
        priority: +this.taskForm.value['priority'],
        performers: this.taskForm.value['performers'].split(','),
        deadline: new Date(this.taskForm.value['deadline']),
      };

      this.store.dispatch(createTaskAction({ task }));
      this.closeTaskWindowForCreation();
    }
  }

  closeTaskWindowForCreation(): void {
    this.windowService.closeTaskWindow();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
