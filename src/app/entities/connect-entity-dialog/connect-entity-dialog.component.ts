import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { EntityType } from '../../interfaces/entity-type.interface';

@Component({
  selector: 'app-connect-entity-dialog',
  templateUrl: './connect-entity-dialog.component.html',
  styleUrls: ['./connect-entity-dialog.component.scss']
})
export class ConnectEntityDialogComponent implements OnInit {
  entityTypes: EntityType[];

  constructor(private dialogRef: MatDialogRef<ConnectEntityDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.entityTypes = this.data[0];
  }

  connect(): void {
    this.dialogRef.close([1,2]);
  }

}
