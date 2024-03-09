import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskSortFilterService } from '../../services/sortAndFilter.service';

@Component({
  selector: 'app-task-sort-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-sort-filter.component.html',
  styleUrl: './task-sort-filter.component.scss',
})
export class TaskSortFilterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private taskSortFilterService = inject(TaskSortFilterService);

  form!: FormGroup;

  statusSortOptions = [
    { label: 'None', value: '' },
    { label: 'Ascending', value: 'statusAsc' },
    { label: 'Descending', value: 'statusDesc' },
  ];

  statusFilterOptions = [
    { label: 'All', value: '' },
    { label: 'New', value: 'new' },
    { label: 'In Progress', value: 'in progress' },
    { label: 'Completed', value: 'completed' },
  ];

  performerSortOptions = [
    { label: 'None', value: '' },
    { label: 'Ascending', value: 'performerAsc' },
    { label: 'Descending', value: 'performerDesc' },
  ];

  deadlineSortOptions = [
    { label: 'None', value: '' },
    { label: 'Ascending', value: 'deadlineAsc' },
    { label: 'Descending', value: 'deadlineDesc' },
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
      deadlineInputFilter: [''],
    });

    this.taskSortFilterService.getData().subscribe((data) => {
      this.form.patchValue(data);
    });
  }

  onSubmit(): void {
    this.taskSortFilterService.setData(this.form.value);
  }
}
 
