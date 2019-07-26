import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceFinderComponent } from './balance-finder.component';

describe('BalanceFinderComponent', () => {
  let component: BalanceFinderComponent;
  let fixture: ComponentFixture<BalanceFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
