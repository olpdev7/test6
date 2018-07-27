import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { NgModule } from '@angular/core';

const modules = [
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialHubModule { }
