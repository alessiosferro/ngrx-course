import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import projectsReducer from './projects/projects.reducer';
import {AppState} from '../models/app-state.model';
import * as fromProjects from './projects/projects.reducer';

export const selectProjectState =
  createFeatureSelector<fromProjects.ProjectsState>('projects');

export const selectAllProjects =
  createSelector(
    selectProjectState,
    fromProjects.selectAllProjects
  );

export const selectProjectIds =
  createSelector(
    selectProjectState,
    fromProjects.selectAllProjectIds
  );

export const selectProjectEntities =
  createSelector(
    selectProjectState,
    fromProjects.selectAllProjectEntities
  );

export const selectSelectedProjectId =
  createSelector(
    selectProjectState,
    fromProjects.getSelectedProjectId
  );

export const reducers: ActionReducerMap<AppState> = {
  projects: projectsReducer
};
