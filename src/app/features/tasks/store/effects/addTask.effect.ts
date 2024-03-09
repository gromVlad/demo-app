import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StorageService } from "../../services/task.service";
import { catchError, map, switchMap } from "rxjs/operators";
import { createTaskAction, createTaskFailureAction, createTaskSuccessAction } from "../actions/addTask.actions";
import { of } from "rxjs";
import { TaskInterface } from "app/shared/model/task.model";


@Injectable()
export class CreateTaskEffect {
  private actions$ = inject(Actions);
  private storageService = inject(StorageService);

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTaskAction),
      switchMap((action) => {
        return this.storageService.createTask(action.task).pipe(
          map((task: TaskInterface) => {
            return createTaskSuccessAction({ task });
          }),

          catchError(() => {
            return of(createTaskFailureAction());
          })
        );
      })
    )
  );
}
