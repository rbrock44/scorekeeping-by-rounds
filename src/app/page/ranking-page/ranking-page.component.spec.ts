import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {RankingPageComponent} from './ranking-page.component';
import {ExcelService} from '../../service/excel.service';
import {SettingsService} from '../../service/settings.service';

describe('RankingPageComponent', () => {
  let component: RankingPageComponent;
  let fixture: ComponentFixture<RankingPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [RankingPageComponent],
    providers: [
        ExcelService,
        SettingsService
    ],
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
