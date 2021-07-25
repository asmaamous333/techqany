import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDropDownComponent } from './user-profile-drop-down.component';

describe('UserProfileDropDownComponent', () => {
  let component: UserProfileDropDownComponent;
  let fixture: ComponentFixture<UserProfileDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
