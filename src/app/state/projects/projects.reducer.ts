import {ProjectsActionTypes} from './projects.action';
import {Project} from '../../models';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface ProjectsState extends EntityState<Project> {
  selectedProjectId: string | null;
}

const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

const initialState: ProjectsState = adapter.getInitialState({
  selectedProjectId: null
});

export const getSelectedProjectId = (state: ProjectsState) => state.selectedProjectId;

export const {
  selectAll: selectAllProjects,
  selectEntities: selectAllProjectEntities,
  selectIds: selectAllProjectIds
} = adapter.getSelectors();

function reducer(state = initialState, action: any): ProjectsState {
  switch (action.type) {
    case ProjectsActionTypes.ProjectsLoaded:
      return adapter.addMany(action.payload, state);

    case ProjectsActionTypes.ProjectDeleted:
      return adapter.removeOne(action.payload, state);

    case ProjectsActionTypes.ProjectAdded:
      return adapter.addOne(action.payload, state);

    case ProjectsActionTypes.ProjectUpdated:
      return adapter.updateOne(action.payload, state);

    case ProjectsActionTypes.SelectProject:
      return {
        ...state,
        selectedProjectId: action.payload
      };
  }

  return state;
}

export default reducer;
