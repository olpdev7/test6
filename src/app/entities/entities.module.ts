import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConnectEntityDialogComponent } from './connect-entity-dialog/connect-entity-dialog.component';
import { EntitiesComponent } from './entities/entities.component';
import { EntityService } from './services/entity.service';
import { EntitiesRoutingModule } from './entities-routing.module';
import { MaterialHubModule } from '../material-hub/material-hub.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialHubModule,
  ],
  declarations: [EntitiesComponent, ConnectEntityDialogComponent],
  entryComponents: [ConnectEntityDialogComponent],
  providers: [EntityService]
})
export class EntitiesModule { }
