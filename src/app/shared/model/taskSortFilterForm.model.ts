export interface TaskSortFilterForm {
  deadlineFilter: 'today' | 'this week' | 'tomorrow' | 'overdue';
  deadlineSort: 'asc' | 'desc';
  performerInputFilter: string;
  performerSort: 'asc' | 'desc';
  statusFilter: 'new' | 'in progress' | 'completed' | 'all';
  statusSort: 'asc' | 'desc';
}

