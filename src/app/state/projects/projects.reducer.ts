import {ProjectActions, ProjectsActionTypes} from './projects.action';
import {Project, ProjectsState} from '../../models/project.model';

const initialState: ProjectsState = {
  projects: [],
  selectedProjectId: null
};

function addProject(projects: Project[], newProject: Project): Project[] {
  return [...projects, newProject];
}

function updateProject(projects: Project[], updatedProject: Project): Project[] {
  return projects.map(project => {
    if (!(project.id === updatedProject.id)) {
      return project;
    }

    return {...updatedProject};
  });
}

function deleteProject(projects: Project[], projectId: string): Project[] {
  return projects.filter(project => project.id !== projectId);
}

function reducer(state = initialState, action: ProjectActions): ProjectsState {
  switch (action.type) {
    case ProjectsActionTypes.AddProject:
      return {
        ...state,
        projects: addProject(state.projects, action.payload)
      };

    case ProjectsActionTypes.UpdateProject:
      return {
        ...state,
        projects: updateProject(state.projects, action.payload)
      };

    case ProjectsActionTypes.DeleteProject:
      return {
        ...state,
        projects: deleteProject(state.projects, action.payload)
      };

    case ProjectsActionTypes.SelectProject:
      return {
        ...state,
        selectedProjectId: action.payload
      };
  }

  return state;
}

export default reducer;
