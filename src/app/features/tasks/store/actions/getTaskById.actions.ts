import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actions.module";
import { TaskInterface } from "app/shared/services/model/task.model";

export const getTaskByIdAction = createAction(
  ActionTypes.GET_TASKS_BY_ID,
  props<{ id: string }>()
);

export const getTaskByIdSuccessAction = createAction(
  ActionTypes.GET_TASKS_BY_ID_SUCCESS,
  props<{ task: TaskInterface  | null}>()
);

export const getTaskByIdFailureAction = createAction(
  ActionTypes.GET_TASKS_BY_ID_FAILURE
);
