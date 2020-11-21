import {ProjectsActionTypes} from './projects.action';
import {Project, ProjectsState} from '../../models/project.model';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';

const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

const initialState: ProjectsState = adapter.getInitialState({
  selectedProjectId: null
});

function reducer(state = initialState, action: any): ProjectsState {
  switch (action.type) {
    case ProjectsActionTypes.AddProject:
      return adapter.addOne(action.payload, state);

    case ProjectsActionTypes.UpdateProject:
      return adapter.updateOne({ id: action.payload.id, changes: action.payload }, state);

    case ProjectsActionTypes.DeleteProject:
      return adapter.removeOne(action.payload, state);

    case ProjectsActionTypes.LoadProjects:
      return adapter.addMany(action.payload, state);

    case ProjectsActionTypes.SelectProject:
      return {
        ...state,
        selectedProjectId: action.payload
      };
  }

  return state;
}

export default reducer;
