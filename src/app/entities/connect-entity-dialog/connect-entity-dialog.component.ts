import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatInput } from '@angular/material';
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

  @ViewChild(MatInput)
  searchMatInput: MatInput;

  constructor(private dialogRef: MatDialogRef<ConnectEntityDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.searchMatInput.focus();
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.subscribe(value => {
      this.filterEntityTypes(value);
    });

    this.entityTypes = this.data.entityTypes;
  }

  connect(): void {
    let checkedIds: number[] = this.getCheckedIds();
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

  private getCheckedIds() {
    return this.entityTypes.reduce((ids, entityType)=> {
      if (entityType.checked) {
        ids.push(entityType.id);
      }
      return ids;
    }, []);
  }
}
