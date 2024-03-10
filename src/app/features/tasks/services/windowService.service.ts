import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class WindowService {
  private taskWindowSubject: BehaviorSubject<{
    createTask: boolean;
    changeTask: boolean;
  }> = new BehaviorSubject<{ createTask: boolean; changeTask: boolean }>({
    createTask: false,
    changeTask: false,
  });
  public taskWindow$: Observable<{ createTask: boolean; changeTask: boolean }> =
    this.taskWindowSubject.asObservable();

  public openTaskWindowForCreation(): void {
    this.taskWindowSubject.next({ createTask: true, changeTask: false });
  }

  public openTaskWindowForEditing(): void {
    this.taskWindowSubject.next({ createTask: false, changeTask: true });
  }

  public closeTaskWindow(): void {
    this.taskWindowSubject.next({ createTask: false, changeTask: false });
  }
}
