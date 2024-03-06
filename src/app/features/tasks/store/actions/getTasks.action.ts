import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actions.module";
import { TasksInterface } from "../../model/tasks.model";

export const getTasksAction = createAction(
  ActionTypes.GET_TASKS
);

export const getTasksSuccessAction = createAction(
  ActionTypes.GET_TASKS_SUCCESS,
  props<{ tasks: TasksInterface }>()
);

export const getTasksFailureAction = createAction(
  ActionTypes.GET_TASKS_FAILURE
);
