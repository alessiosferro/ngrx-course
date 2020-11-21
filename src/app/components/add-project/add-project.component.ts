import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../models/app-state.model';
import {AddProject} from '../../state/projects/projects.action';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {
  constructor(
    private store$: Store<AppState>
  ) { }

  addProject(input: HTMLInputElement): void {
    const { value: title } = input;
    input.value = '';

    if (!title) {
      return;
    }

    this.store$.dispatch(new AddProject(title));
  }

}
