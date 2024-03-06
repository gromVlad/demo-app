import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StorageService } from "../../services/task.service";
import { catchError, map, switchMap } from "rxjs/operators";
import { getTasksAction, getTasksFailureAction, getTasksSuccessAction } from "../actions/getTasks.action";
import { TasksInterface } from "../../model/tasks.model";
import { of } from "rxjs";

@Injectable()
export class GetTasksEffect {
  private actions$ = inject(Actions);
  private storageService = inject(StorageService);

  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasksAction),
      switchMap(() => {
        return this.storageService.getTasks().pipe(
          map((tasks: TasksInterface) => {
            return getTasksSuccessAction({ tasks });
          }),

          catchError(() => {
            return of(getTasksFailureAction());
          })
        );
      })
    )
  );
}
