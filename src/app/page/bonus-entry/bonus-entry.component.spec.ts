import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BonusEntryComponent} from './bonus-entry.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {AlertService} from '../../service/alert.service';
import {ExcelService} from '../../service/excel.service';
import {SettingsService} from '../../service/settings.service';

describe('ScoreEntryPageComponent', () => {
  let component: BonusEntryComponent;
  let fixture: ComponentFixture<BonusEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [
        BonusEntryComponent,
      ],
      providers: [
        AlertService,
        ExcelService,
        SettingsService
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
