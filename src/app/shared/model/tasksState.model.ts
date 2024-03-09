import { TasksInterface } from "app/features/tasks/model/tasks.model";
import { TaskInterface } from "./task.model";

export interface TasksStateInterface {
  data: TasksInterface;
  isLoading: boolean;
  error: null | string;
  currentTask: null | TaskInterface;
};
