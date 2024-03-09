export interface TaskSortFilterForm {
  deadlineFilter: 'today' | 'this week' | 'more weeks' | 'tomorrow' | 'overdue';
  deadlineSort: 'asc' | 'desc';
  performerInputFilter: string;
  performerSort: 'asc' | 'desc';
  statusFilter: 'new' | 'in progress' | 'completed' | 'all';
  statusSort: 'asc' | 'desc';
}

