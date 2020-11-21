import {Action} from '@ngrx/store';
import {Project} from '../../models';

export enum ProjectsActionTypes {
  AddProject = '[Projects] Add Project',
  ProjectAdded = '[Projects] Project Added',
  UpdateProject = '[Projects] Update Project',
  ProjectUpdated = '[Projects] Project Updated',
  DeleteProject = '[Projects] Delete Project',
  ProjectDeleted = '[Projects] Project Deleted',
  SelectProject = '[Projects] Select Project',
  LoadProjects = '[Projects] Load Projects',
  ProjectsLoaded = '[Projects] Projects Loaded'
}

export class AddProject implements Action {
  readonly type = ProjectsActionTypes.AddProject;
  constructor(public payload: string) {}
}

export class ProjectAdded implements Action {
  readonly type = ProjectsActionTypes.ProjectAdded;
  constructor(public payload: Project) {}
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.UpdateProject;
  constructor(public payload: Project) { }
}

export class ProjectUpdated implements Action {
  readonly type = ProjectsActionTypes.ProjectUpdated;
  constructor(public payload: Project) {}
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.DeleteProject;
  constructor(public payload: string) {}
}

export class ProjectDeleted implements Action {
  readonly type = ProjectsActionTypes.ProjectDeleted;
  constructor(public payload: string) {}
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.SelectProject;
  constructor(public payload: string | null) {}
}

export class LoadProjects implements Action {
  readonly type = ProjectsActionTypes.LoadProjects;
}

export class ProjectsLoaded implements Action {
  readonly type = ProjectsActionTypes.ProjectsLoaded;
  constructor(public payload: Project[]) {}
}

export type ProjectActions =
  AddProject
  | UpdateProject
  | ProjectUpdated
  | DeleteProject
  | ProjectDeleted
  | SelectProject
  | LoadProjects
  | ProjectsLoaded
  | ProjectAdded;

