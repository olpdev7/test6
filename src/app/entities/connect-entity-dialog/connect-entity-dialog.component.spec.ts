import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectEntityDialogComponent } from './connect-entity-dialog.component';

describe('ConnectEntityDialogComponent', () => {
  let component: ConnectEntityDialogComponent;
  let fixture: ComponentFixture<ConnectEntityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectEntityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectEntityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
