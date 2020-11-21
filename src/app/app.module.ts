import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ComponentsModule} from './components/components.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './state';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ProjectsEffects} from "./state/projects/projects.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      ProjectsEffects
    ]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
