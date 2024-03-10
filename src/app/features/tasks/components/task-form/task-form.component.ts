import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { createTaskAction } from '../../store/actions/addTask.actions';
import { TaskInterface } from 'app/shared/model/task.model';
import { GenerateUniqueId } from 'app/shared/utils/generateUniqueId.service';

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
  private generateUniqueId = inject(GenerateUniqueId);

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
        id: this.generateUniqueId.getId(),
        priority: +this.taskForm.value['priority'],
        performers: this.taskForm.value['performers'].split(','),
        deadline: new Date(this.taskForm.value['deadline']),
      };

      this.store.dispatch(createTaskAction({ task }));
    }
  }
}
