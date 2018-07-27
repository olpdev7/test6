import { Component, Input, OnInit } from '@angular/core';
import { EntityType } from '../../interfaces/entity-type.interface';

@Component({
  selector: 'app-entity-type-list',
  templateUrl: './entity-type-list.component.html',
  styleUrls: ['./entity-type-list.component.scss']
})
export class EntityTypeListComponent implements OnInit {
  @Input() entityTypes: EntityType[];
  constructor() { }

  ngOnInit() {
  }

}
