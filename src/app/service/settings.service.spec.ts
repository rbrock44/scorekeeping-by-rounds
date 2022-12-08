import {TestBed} from '@angular/core/testing';

import {SettingsService} from './settings.service';
import {ExcelService} from './excel.service';

describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ExcelService,
      SettingsService
    ],
  }));

  it('should be created', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });
});
