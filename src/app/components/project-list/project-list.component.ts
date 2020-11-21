import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../models';
import {Store} from '@ngrx/store';
import {AppState} from '../../models/app-state.model';
import {map, pluck, tap} from 'rxjs/operators';
import {DeleteProject, LoadProjects, SelectProject, UpdateProject} from '../../state/projects/projects.action';
import { v4 as uuid } from 'uuid';

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
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(new LoadProjects([
      { id: uuid(), title: 'Places' },
      { id: uuid(), title: 'Itas'}
    ]));

    this.projects$ = this.store$.select('projects').pipe(
      pluck('entities'),
      map(data => Object.keys(data).map(k => data[k] as Project))
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
