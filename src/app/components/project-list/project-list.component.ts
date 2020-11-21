import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../models';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../models/app-state.model';
import {DeleteProject, LoadProjects, SelectProject, UpdateProject} from '../../state/projects/projects.action';
import {selectAllProjects} from '../../state/projects/projects.reducer';
import {selectCurrentProject, selectCurrentProjectId} from '../../state/projects/projects.selectors';
import {filter, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  projects$: Observable<Project[]> | undefined;
  selectedProjectId$: Observable<string | null> | undefined;
  currentProject$: Observable<Project | null> | undefined;

  @ViewChildren('input')
  inputElement: QueryList<HTMLInputElement> | undefined;

  constructor(
    private store$: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(new LoadProjects());

    this.projects$ = this.store$.select('projects').pipe(
      select(selectAllProjects)
    );

    this.selectedProjectId$ = this.store$.pipe(
      select(selectCurrentProjectId)
    );

    this.currentProject$ = this.store$.pipe(
      select(selectCurrentProject)
    );
  }

  ngAfterViewInit(): void {
    this.inputElement?.changes.pipe(
      pluck('first', 'nativeElement'),
      filter(el => !!el)
    ).subscribe(element => element.focus());
  }

  deleteProject(id: string): void {
    this.store$.dispatch(new DeleteProject(id));
  }

  selectProject(id: string): void {
    this.store$.dispatch(new SelectProject(id));
  }

  updateProject(project: Project): void {
    this.store$.dispatch(new UpdateProject(project));
  }
}
