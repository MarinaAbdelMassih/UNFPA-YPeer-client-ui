import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsSwiperComponent } from './search-results-swiper.component';

describe('DefaultCoursesSwiperComponent', () => {
  let component: SearchResultsSwiperComponent;
  let fixture: ComponentFixture<SearchResultsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
