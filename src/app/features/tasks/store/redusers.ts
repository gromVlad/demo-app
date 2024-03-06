import { createReducer, on } from "@ngrx/store";
import { TasksStateInterface } from "app/shared/services/model/tasksState.model";
import { getTasksAction, getTasksFailureAction, getTasksSuccessAction } from "./actions/getTasks.action";
import { routerNavigationAction } from "@ngrx/router-store";

const initialState: TasksStateInterface = {
  data: [],
  isLoading: false,
  error: null,
};

export const tasksReducer = createReducer(
  initialState,
  on(
    getTasksAction,
    (state): TasksStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getTasksSuccessAction,
    (state, action): TasksStateInterface => ({
      ...state,
      isLoading: false,
      data: action.tasks,
    })
  ),
  on(
    getTasksFailureAction,
    (state): TasksStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): TasksStateInterface => initialState)
);
