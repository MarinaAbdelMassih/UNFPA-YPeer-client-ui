import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsStoryComponent } from './news-details-story.component';

describe('NewsDetailsStoryComponent', () => {
  let component: NewsDetailsStoryComponent;
  let fixture: ComponentFixture<NewsDetailsStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailsStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
