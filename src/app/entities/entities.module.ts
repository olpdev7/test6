import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesComponent } from './entities/entities.component';
import { ConnectEntityDialogComponent } from './connect-entity-dialog/connect-entity-dialog.component';
import { EntityService } from './services/entity.service';
import { EntitiesRoutingModule } from './entities-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EntitiesRoutingModule
  ],
  declarations: [EntitiesComponent, ConnectEntityDialogComponent],
  providers: [EntityService]
})
export class EntitiesModule { }
