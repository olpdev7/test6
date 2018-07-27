import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

const modules = [
  MatDialogModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialHubModule { }
