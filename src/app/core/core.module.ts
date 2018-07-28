import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EntitiesModule } from '../entities/entities.module';
import { MaterialHubModule } from '../material-hub/material-hub.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    EntitiesModule,
    HttpClientModule,
    MaterialHubModule,
    RouterModule
  ],
  declarations: []
})
export class CoreModule { }
