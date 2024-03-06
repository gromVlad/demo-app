import { TasksInterface } from "app/features/tasks/model/tasks.model";

export interface TasksStateInterface {
  data: TasksInterface
  isLoading: boolean,
  error: null | string,
};
