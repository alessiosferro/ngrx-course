import {EntityState} from '@ngrx/entity';

export interface Project {
  id: string;
  title: string;
}

export interface ProjectsState extends EntityState<Project> {
  selectedProjectId: string | null;
}
