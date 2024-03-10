import { createSelector } from "@ngrx/store";
import { TasksStateInterface } from "app/shared/model/tasksState.model";


export interface AppStateInterface {
  tasks: TasksStateInterface;
}


export const selectFeature = (state: AppStateInterface) => state.tasks;

export const isLoadingSelector = createSelector(
  selectFeature,
  (tasksState: TasksStateInterface) => tasksState.isLoading
);

export const errorSelector = createSelector(
  selectFeature,
  (tasksState: TasksStateInterface) => tasksState.error
);

export const tasksSelector = createSelector(
  selectFeature,
  (tasksState: TasksStateInterface) => tasksState.data
);

export const taskSelector = createSelector(
  selectFeature,
  (tasksState: TasksStateInterface) => tasksState.currentTask
);

