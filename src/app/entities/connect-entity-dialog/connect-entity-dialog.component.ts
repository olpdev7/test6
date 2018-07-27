import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

import { EntityType } from '../../interfaces/entity-type.interface';

@Component({
  selector: 'app-connect-entity-dialog',
  templateUrl: './connect-entity-dialog.component.html',
  styleUrls: ['./connect-entity-dialog.component.scss']
})
export class ConnectEntityDialogComponent implements OnInit {
  entityTypes: EntityType[];
  searchControl: FormControl;

  constructor(private dialogRef: MatDialogRef<ConnectEntityDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.subscribe(value => {
      this.filterEntityTypes(value);
    });

    this.entityTypes = this.data.entityTypes;
  }

  connect(): void {
    let checkedIds:number[] = this.entityTypes.reduce((ids, entityType)=> {
      if (entityType.checked) {
        ids.push(entityType.id);
      }
      return ids;
    }, []);

    this.close(checkedIds);
  }

  close(ids?: number[]): void {
    this.searchControl.setValue('');
    this.dialogRef.close(ids);
  }

  filterEntityTypes(term: string): void {
    this.entityTypes.forEach(entityType => {
      entityType.hidden = entityType.title.search(term) === -1;
    });
  }
}
