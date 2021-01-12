import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {YesNoDropdownComponent} from './yes-no-dropdown.component';

describe('YesNoDropdownComponent', () => {
  let component: YesNoDropdownComponent;
  let fixture: ComponentFixture<YesNoDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YesNoDropdownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
