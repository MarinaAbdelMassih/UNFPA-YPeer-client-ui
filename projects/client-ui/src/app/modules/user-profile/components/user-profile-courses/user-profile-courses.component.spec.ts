import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileCoursesComponent } from './user-profile-courses.component';

describe('UserProfileCoursesComponent', () => {
  let component: UserProfileCoursesComponent;
  let fixture: ComponentFixture<UserProfileCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
