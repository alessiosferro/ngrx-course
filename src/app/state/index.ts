import {ActionReducerMap} from '@ngrx/store';
import projectsReducer from './projects/projects.reducer';
import {AppState} from '../models/app-state.model';

export const reducers: ActionReducerMap<AppState> = {
  projects: projectsReducer
};
