import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntitiesComponent } from './entities/entities.component';

const routes: Routes = [
  {
    path: 'entities',
    component: EntitiesComponent
  }
];

@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ]
})
export class EntitiesRoutingModule { }
