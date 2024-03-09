import { Injectable } from '@angular/core';
import { TaskSortFilterForm } from 'app/shared/model/taskSortFilterForm.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskSortFilterService {
  private data = new BehaviorSubject<any>({});

  setData(data: TaskSortFilterForm) {
    this.data.next(data);
  }

  getData(): Observable<TaskSortFilterForm> {
    return this.data.asObservable();
  }
}
