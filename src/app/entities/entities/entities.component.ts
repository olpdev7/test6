import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { ConnectEntityDialogComponent } from '../connect-entity-dialog/connect-entity-dialog.component';
import { EntityService } from '../services/entity.service';
import { EntityDetails } from '../../interfaces/entity-details.interface';
import { EntityType } from '../../interfaces/entity-type.interface';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  dialogRef: MatDialogRef<ConnectEntityDialogComponent>;
  entityDetails: EntityDetails[] = [];

  constructor(private entityService: EntityService, private dialog: MatDialog) { }

  ngOnInit(): void {}

  showDialog(): void {
    this.entityService.getEntityTypes().subscribe((entityTypes) => {
      this.dialogRef = this.createDialogRef(entityTypes);

      this.dialogRef.afterClosed()
        .pipe(
          mergeMap((ids: number[]) => {
            if (ids && ids.length) {
              return this.entityService.getEntitiesByIds(ids);
            } else {
              return of(this.entityDetails);
            }
          })
        ).subscribe(entityDetails => {
        this.entityDetails = entityDetails;
      });
    });
  }

  private createDialogRef(entityTypes: EntityType[]) {
    return this.dialog.open(ConnectEntityDialogComponent, {
      data: {entityTypes},
      height: '100vh',
      width: '100vw',
      maxWidth: '100vw'
    });
  }

}
