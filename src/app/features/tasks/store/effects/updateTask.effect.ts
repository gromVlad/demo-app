import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StorageService } from "../../services/task.service";
import { updateTaskAction, updateTaskFailureAction, updateTaskSuccessAction } from "../actions/updateTask.action";
import { catchError, map, switchMap } from "rxjs/operators";
import { TaskInterface } from "app/shared/model/task.model";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class UpdateTaskEffect {
  private actions$ = inject(Actions);
  private storageService = inject(StorageService);

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTaskAction),
      switchMap((action) => {
        return this.storageService.updateTask(action.task).pipe(
          map((task: TaskInterface) => {
            return updateTaskSuccessAction({ task });
          }),

          catchError((error:HttpErrorResponse) => {
            return of(updateTaskFailureAction(error));
          })
        );
      })
    )
  );
}
