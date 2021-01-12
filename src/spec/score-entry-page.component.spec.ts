import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScoreEntryPageComponent} from './score-entry-page.component';

describe('ScoreEntryPageComponent', () => {
  let component: ScoreEntryPageComponent;
  let fixture: ComponentFixture<ScoreEntryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreEntryPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
