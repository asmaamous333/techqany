import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShippingDetailsDialogComponent } from './user-shipping-details-dialog.component';

describe('UserShippingDetailsDialogComponent', () => {
  let component: UserShippingDetailsDialogComponent;
  let fixture: ComponentFixture<UserShippingDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShippingDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShippingDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
