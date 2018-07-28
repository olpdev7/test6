import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ConnectEntityDialogComponent } from './connect-entity-dialog.component';
import { MaterialHubModule } from '../../material-hub/material-hub.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConnectEntityDialogComponent', () => {
  let component: ConnectEntityDialogComponent;
  let fixture: ComponentFixture<ConnectEntityDialogComponent>;

  beforeEach(async(() => {
    const matDialogRefSpy =
      jasmine.createSpyObj('MatDialogRef', ['open']);

    TestBed.configureTestingModule({
      declarations: [ ConnectEntityDialogComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialHubModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: matDialogRefSpy},
        {provide: MAT_DIALOG_DATA,  useValue: {}}
      ]
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
