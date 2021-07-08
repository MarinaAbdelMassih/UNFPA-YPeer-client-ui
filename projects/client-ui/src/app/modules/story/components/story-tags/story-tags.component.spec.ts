import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTagsComponent } from './story-tags.component';

describe('StoryTagsComponent', () => {
  let component: StoryTagsComponent;
  let fixture: ComponentFixture<StoryTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
