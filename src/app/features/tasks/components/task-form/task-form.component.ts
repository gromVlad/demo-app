import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TaskInterface } from 'app/shared/services/model/task.model';
import { AppStateInterface } from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { createTaskAction } from '../../store/actions/addTask.actions';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store<AppStateInterface>);

  taskForm!: FormGroup;

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      deadline: [''],
      priority: [1, Validators.min(1)],
      status: ['new'],
      performers: [''],
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const task: TaskInterface = {
        ...this.taskForm.value,
        id: new Date().getTime(),
        priority: +this.taskForm.value['priority'],
        performers: this.taskForm.value['performers'].split(','),
      };

      this.store.dispatch(createTaskAction({ task }));
    }
  }
}
