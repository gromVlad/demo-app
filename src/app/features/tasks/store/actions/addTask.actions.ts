import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actions.module";
import { TaskInterface } from "app/shared/services/model/task.model";

export const createTaskAction = createAction(
  ActionTypes.CREATE_TASK,
  props<{ task: TaskInterface }>()
);

export const createTaskSuccessAction = createAction(
  ActionTypes.CREATE_TASK_SUCCESS,
  props<{ task: TaskInterface }>()
);

export const createTaskFailureAction = createAction(
  ActionTypes.CREATE_TASK_FAILURE
);
