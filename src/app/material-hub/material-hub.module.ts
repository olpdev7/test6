import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

const modules = [
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatDialogModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialHubModule { }
