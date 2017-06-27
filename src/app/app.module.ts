import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TasklistComponent} from './tasklist.component';
import {NewtaskComponent} from './newtask.component';
import {RootComponent} from "./root.component";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {
    path: 'tasks',
    component: TasklistComponent
  },
  {
    path: 'newtask',
    component: NewtaskComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    TasklistComponent,
    NewtaskComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
