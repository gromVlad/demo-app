import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TaskInterface } from 'app/shared/services/model/task.model';
import { AppStateInterface } from '../../store/selectors';
import { updateTaskAction } from '../../store/actions/updateTask.action';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss',
})
export class TaskEditComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store<AppStateInterface>);

  @Output() taskEditClosed = new EventEmitter<void>();
  @Input() task!: TaskInterface;
  taskForm!: FormGroup;

  ngOnInit(): void {
    const performers = this.task.performers.join(',');

    this.taskForm = this.fb.group({
      status: [this.task.status, Validators.required],
      performers: [performers, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const updatedTask: TaskInterface = {
        ...this.task,
        ...this.taskForm.value,
        performers: this.taskForm.value["performers"].split(','),
      };

      this.store.dispatch(updateTaskAction({ task: updatedTask }));
    }
    this.taskEditClosed.emit();
  }

}
