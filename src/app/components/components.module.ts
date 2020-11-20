import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProjectListComponent, AddProjectComponent],
  exports: [
    ProjectListComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
