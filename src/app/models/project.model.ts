export interface Project {
  id: string;
  title: string;
}

export interface ProjectsState {
  projects: Project[];
  selectedProjectId: string | null;
}
