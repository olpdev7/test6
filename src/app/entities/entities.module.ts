import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectEntityDialogComponent } from './connect-entity-dialog/connect-entity-dialog.component';
import { EntitiesComponent } from './entities/entities.component';
import { EntityService } from './services/entity.service';
import { EntitiesRoutingModule } from './entities-routing.module';
import { MaterialHubModule } from '../material-hub/material-hub.module';
import { EntityTypeListComponent } from './entity-list/entity-type-list.component';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule,
    MaterialHubModule,
  ],
  declarations: [EntitiesComponent, ConnectEntityDialogComponent, EntityTypeListComponent],
  entryComponents: [ConnectEntityDialogComponent],
  providers: [EntityService]
})
export class EntitiesModule { }
