import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesComponent } from './entities.component';
import { MaterialHubModule } from '../../material-hub/material-hub.module';
import { EntityService } from '../services/entity.service';

describe('EntitiesComponent', () => {
  let component: EntitiesComponent;
  let fixture: ComponentFixture<EntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntitiesComponent ],
      imports: [
        MaterialHubModule
      ],
      providers: [{
        provide: EntityService,
        useValue: {}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
