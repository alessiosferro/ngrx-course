import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProjects from './projects.reducer';
import {ProjectsState} from './projects.reducer';
import {Project} from "../../models";

export const selectProjectState =
  createFeatureSelector<fromProjects.ProjectsState>('projects');

export const getSelectedProjectId = (state: ProjectsState) => state.selectedProjectId;

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

export const selectCurrentProjectId =
  createSelector(
    selectProjectState,
    getSelectedProjectId
  );

export const selectCurrentProject =
  createSelector(
    selectProjectEntities,
    selectCurrentProjectId,
    (projects, projectId) => {
      const defaultProject: Project = { id: '', title: 'No project is selected' };

      if (!projectId) {
        return defaultProject;
      }

      return projects[projectId] ?? defaultProject;
    }
  );
