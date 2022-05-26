import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrepositoriesComponent } from './userrepositories.component';

describe('UserrepositoriesComponent', () => {
  let component: UserrepositoriesComponent;
  let fixture: ComponentFixture<UserrepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserrepositoriesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
