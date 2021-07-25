import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksForPurchasingComponent } from './thanks-for-purchasing.component';

describe('ThanksForPurchasingComponent', () => {
  let component: ThanksForPurchasingComponent;
  let fixture: ComponentFixture<ThanksForPurchasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksForPurchasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksForPurchasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
