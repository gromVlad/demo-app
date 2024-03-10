import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskSortFilterService } from '../../services/sortAndFilter.service';
import { TaskSortFilterForm } from 'app/shared/model/taskSortFilterForm.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-sort-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './task-sort-filter.component.html',
  styleUrl: './task-sort-filter.component.scss',
})
export class TaskSortFilterComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly taskSortFilterService = inject(TaskSortFilterService);

  form!: FormGroup;

  statusSortOptions = [
    { label: 'None', value: '' },
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
  ];

  statusFilterOptions = [
    { label: 'All', value: '' },
    { label: 'New', value: 'new' },
    { label: 'In Progress', value: 'in progress' },
    { label: 'Completed', value: 'completed' },
  ];

  performerSortOptions = [
    { label: 'None', value: '' },
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
  ];

  deadlineSortOptions = [
    { label: 'None', value: '' },
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
  ];

  deadlineFilterOptions = [
    { label: 'All', value: '' },
    { label: 'Today', value: 'today' },
    { label: 'Tomorrow', value: 'tomorrow' },
    { label: 'This week', value: 'this week' },
    { label: 'overdue', value: 'overdue' },
  ];

  ngOnInit(): void {
    this.initialValues();
  }

  initialValues(): void {
    this.form = this.fb.group({
      statusSort: [''],
      statusFilter: [''],
      performerSort: [''],
      performerInputFilter: [''],
      deadlineSort: [''],
      deadlineFilter: [''],
    });

    this.taskSortFilterService
      .getData()
      .subscribe((data: TaskSortFilterForm) => {
        this.form.patchValue(data);
      });
  }

  onBlur() {
    this.taskSortFilterService.setData(this.form.value);
  }

  onSelectionChange() {
    this.taskSortFilterService.setData(this.form.value);
  }

  onEnter() {
    this.taskSortFilterService.setData(this.form.value);
  }
}
 
