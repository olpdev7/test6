import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';

@Injectable()
export class EntityService {

  constructor() { }

  getEntities() {}

  getEntitiesByIds(ids: string[]) {
    return from([]);
  }

}
