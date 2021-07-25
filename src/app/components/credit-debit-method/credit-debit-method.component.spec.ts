import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDebitMethodComponent } from './credit-debit-method.component';

describe('CreditDebitMethodComponent', () => {
  let component: CreditDebitMethodComponent;
  let fixture: ComponentFixture<CreditDebitMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditDebitMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDebitMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
