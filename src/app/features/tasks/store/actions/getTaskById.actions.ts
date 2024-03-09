import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actions.module";
import { TaskInterface } from "app/shared/model/task.model";

export const getTaskByIdAction = createAction(
  ActionTypes.GET_TASKS_BY_ID,
  props<{ id: string }>()
);

export const getTaskByIdSuccessAction = createAction(
  ActionTypes.GET_TASKS_BY_ID_SUCCESS,
  props<{ task: TaskInterface}>()
);

export const getTaskByIdFailureAction = createAction(
  ActionTypes.GET_TASKS_BY_ID_FAILURE
);
