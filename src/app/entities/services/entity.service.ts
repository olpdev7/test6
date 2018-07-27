import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { EntityDetails, EntityType } from '../../interfaces';
import { entityDetails, entityTypes } from './entities.mock'

@Injectable()
export class EntityService {

  constructor() { }

  getEntityTypes(): Observable<EntityType[]> {
    return of(entityTypes);
  }

  getEntitiesByIds(ids: number[]): Observable<EntityDetails[]> {
    return of(entityDetails
      .filter(entityDetails => {
        return ids.includes(entityDetails.entityTypeId);
      }));
  }

}
