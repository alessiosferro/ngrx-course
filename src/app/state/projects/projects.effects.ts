import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  ProjectAdded,
  ProjectDeleted,
  ProjectsActionTypes,
  ProjectsLoaded,
  ProjectUpdated,
  SelectProject
} from './projects.action';
import {exhaustMap, map, switchMap, tap} from 'rxjs/operators';
import {v4 as uuid} from 'uuid';
import {Project} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsEffects {
  @Effect()
  loadProjects = this.actions.pipe(
    ofType(ProjectsActionTypes.LoadProjects),
    switchMap(() => {
      return new Promise<Project[]>(resolve => {
        setTimeout(() => resolve([
          {id: uuid(), title: 'Places'},
          {id: uuid(), title: 'Itas'}
        ]), 200);
      });
    }),
    map((projects) => new ProjectsLoaded(projects))
  );

  @Effect()
  addProject = this.actions.pipe(
    ofType(ProjectsActionTypes.AddProject),
    exhaustMap(({ payload: title }) => {
      // fake wait for backend api call response
      return new Promise<Project>(resolve => {
        setTimeout(() => resolve({
          id: uuid(),
          title
        }), 200);
      });
    }),
    map((project) => new ProjectAdded(project))
  );

  @Effect()
  projectUpdated = this.actions.pipe(
    ofType(ProjectsActionTypes.ProjectUpdated),
    map(() => new SelectProject(null))
  );

  @Effect()
  updateProject = this.actions.pipe(
    ofType(ProjectsActionTypes.UpdateProject),
    exhaustMap(({ payload: project }) => {
      // fake wait for backend api call response
      return new Promise<Project>(resolve => {
        setTimeout(() => resolve(project), 200);
      });
    }),
    map((project) => new ProjectUpdated(project))
  );

  @Effect()
  deleteProject = this.actions.pipe(
    ofType(ProjectsActionTypes.DeleteProject),
    exhaustMap(({ payload: projectId }) => {
      // fake wait for backend api call response
      return new Promise<string>(resolve => {
        setTimeout(() => resolve(projectId), 200);
      });
    }),
    map((projectId) => new ProjectDeleted(projectId))
  );

  constructor(
    private actions: Actions
  ) {
  }
}
