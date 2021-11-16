import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCoursesSwiperComponent } from './default-courses-swiper.component';

describe('DefaultCoursesSwiperComponent', () => {
  let component: DefaultCoursesSwiperComponent;
  let fixture: ComponentFixture<DefaultCoursesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCoursesSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCoursesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
