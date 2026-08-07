import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {expectElementToContainContentAtIndex} from '../../constants/expectations.spec';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {ExcelService} from '../../service/excel.service';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component;
  let router: Router;
  let links = [
    'Rankings',
    'Score Entry',
    'Settings'
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        HeaderComponent
    ],
    providers: [
        ExcelService
    ],
}).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct links in header', () => {
    links.forEach((item, index) => {
      expectElementToContainContentAtIndex(
        fixture,
        '.nav-bar-link',
        item,
        index
      );
    });
  });
});
