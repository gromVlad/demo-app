import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskInterface } from "app/shared/model/task.model";
import { catchError, map, switchMap } from "rxjs/operators";
import { getTaskByIdAction, getTaskByIdFailureAction, getTaskByIdSuccessAction } from "../actions/getTaskById.actions";
import { of } from "rxjs";
import { StorageService } from "../../services/task.service";

@Injectable()
export class GetTaskByIdEffect {
  private actions$ = inject(Actions);
  private storageService = inject(StorageService);

  getTaskById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTaskByIdAction),
      switchMap((action) =>
        this.storageService.getTaskById(action.id).pipe(
          map((task: TaskInterface ) =>
            getTaskByIdSuccessAction({ task })
          ),
          catchError(() => of(getTaskByIdFailureAction()))
        )
      )
    )
  );

}
