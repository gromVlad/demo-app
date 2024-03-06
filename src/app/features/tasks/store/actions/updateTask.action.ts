
import { createAction, props } from "@ngrx/store";
import { TaskInterface } from "app/shared/services/model/task.model";
import { ActionTypes } from '../actions.module';

export const updateTaskAction = createAction(
  ActionTypes.UPDATE_TASK,
  props<{ task: TaskInterface }>()
);

export const updateTaskSuccessAction = createAction(
  ActionTypes.UPDATE_TASK_SUCCESS,
  props<{ task: TaskInterface }>()
);

export const updateTaskFailureAction = createAction(
  ActionTypes.UPDATE_TASK_FAILURE,
  (error: any) => ({ error })
);
