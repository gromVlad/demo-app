import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskSortFilterService {
  private data = new BehaviorSubject<any>({});

  setData(data: any) {
    this.data.next(data);
  }

  getData(): Observable<any> {
    return this.data.asObservable();
  }

}
