import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialHubModule } from './material-hub/material-hub.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MaterialHubModule,
        RouterModule.forRoot([])
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
