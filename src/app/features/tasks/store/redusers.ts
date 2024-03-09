import { createReducer, on } from '@ngrx/store';
import { TasksStateInterface } from 'app/shared/model/tasksState.model';
import {
  getTasksAction,
  getTasksFailureAction,
  getTasksSuccessAction,
} from './actions/getTasks.action';
import {
  createTaskAction,
  createTaskFailureAction,
  createTaskSuccessAction,
} from './actions/addTask.actions';
import {
  updateTaskAction,
  updateTaskFailureAction,
  updateTaskSuccessAction,
} from './actions/updateTask.action';
import { getTaskByIdAction, getTaskByIdFailureAction, getTaskByIdSuccessAction } from './actions/getTaskById.actions';

const initialState: TasksStateInterface = {
  data: [],
  isLoading: false,
  error: null,
  currentTask: null
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
  on(
    createTaskAction,
    (state): TasksStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    createTaskSuccessAction,
    (state, action): TasksStateInterface => ({
      ...state,
      isLoading: false,
      data: [...state.data, action.task],
    })
  ),
  on(
    createTaskFailureAction,
    (state): TasksStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    updateTaskAction,
    (state): TasksStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    updateTaskSuccessAction,
    (state, action): TasksStateInterface => ({
      ...state,
      isLoading: false,
      data: state.data.map((task) =>
        task.id === action.task.id ? action.task : task
      ),
    })
  ),
  on(
    updateTaskFailureAction,
    (state): TasksStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    getTaskByIdAction,
    (state): TasksStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getTaskByIdSuccessAction,
    (state, action): TasksStateInterface => ({
      ...state,
      isLoading: false,
      currentTask: action.task,
    })
  ),
  on(
    getTaskByIdFailureAction,
    (state): TasksStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
);
