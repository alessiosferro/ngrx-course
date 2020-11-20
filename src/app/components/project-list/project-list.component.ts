import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../models';
import {Store} from '@ngrx/store';
import {AppState} from '../../models/app-state.model';
import {pluck} from 'rxjs/operators';
import {DeleteProject, SelectProject, UpdateProject} from '../../state/projects/projects.action';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects$: Observable<Project[]> | undefined;
  selectedProjectId$: Observable<string | null> | undefined;

  constructor(
    private store$: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.projects$ = this.store$.select('projects').pipe(
      pluck('projects')
    );

    this.selectedProjectId$ = this.store$.select('projects').pipe(
      pluck('selectedProjectId')
    );
  }

  deleteProject(id: string): void {
    this.store$.dispatch(new DeleteProject(id));
  }

  selectProject(id: string): void {
    this.store$.dispatch(new SelectProject(id));
  }

  updateProject(project: Project): void {
    this.store$.dispatch(new UpdateProject(project));
    this.store$.dispatch(new SelectProject(null));
  }
}
