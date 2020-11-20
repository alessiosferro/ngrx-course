import {Action} from '@ngrx/store';
import {Project} from '../../models';

export enum ProjectsActionTypes {
  AddProject = '[Projects] Add Project',
  UpdateProject = '[Projects] Update Project',
  DeleteProject = '[Projects] Delete Project',
  SelectProject = '[Projects] Select Project'
}

export class AddProject implements Action {
  readonly type = ProjectsActionTypes.AddProject;
  constructor(public payload: Project) {}
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.UpdateProject;
  constructor(public payload: Project) {}
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.DeleteProject;
  constructor(public payload: string) {}
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.SelectProject;
  constructor(public payload: string | null) {}
}

export type ProjectActions = AddProject | UpdateProject | DeleteProject | SelectProject;

