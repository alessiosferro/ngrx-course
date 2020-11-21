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
import {exhaustMap, map, mapTo, tap} from 'rxjs/operators';
import {v4 as uuid} from 'uuid';
import {Store} from '@ngrx/store';
import {AppState} from '../../models/app-state.model';
import {timer} from 'rxjs';
import {Project} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsEffects {
  @Effect()
  loadProjects = this.actions.pipe(
    ofType(ProjectsActionTypes.LoadProjects),
    map(() => {
      return [
        { id: uuid(), title: 'Places' },
        { id: uuid(), title: 'Itas'}
      ];
    }),
    tap((projects) => this.store.dispatch(new ProjectsLoaded(projects)))
  );

  @Effect()
  addProject = this.actions.pipe(
    ofType(ProjectsActionTypes.AddProject),
    exhaustMap((title: string) => {
      // fake wait for backend api call response
      return timer(200).pipe(
        map(() => ({
          id: uuid(),
          title
        }))
      );
    }),
    tap((project) => this.store.dispatch(new ProjectAdded(project)))
  );

  @Effect()
  projectUpdated = this.actions.pipe(
    ofType(ProjectsActionTypes.ProjectUpdated),
    tap(() => this.store.dispatch(new SelectProject(null)))
  );

  @Effect()
  updateProject = this.actions.pipe(
    ofType(ProjectsActionTypes.AddProject),
    exhaustMap((project: Project) => {
      // fake wait for backend api call response
      return timer(200).pipe(
        mapTo(project)
      );
    }),
    tap((project) => this.store.dispatch(new ProjectUpdated(project)))
  );

  @Effect()
  deleteProject = this.actions.pipe(
    ofType(ProjectsActionTypes.DeleteProject),
    exhaustMap(projectId => {
      // fake wait for backend api call response
      return timer(200).pipe(
        mapTo(projectId)
      );
    }),
    tap((projectId) => this.store.dispatch(new ProjectDeleted(projectId)))
  );

  constructor(
    private actions: Actions,
    private store: Store<AppState>
  ) {}
}
