import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTagsComponent } from './events-tags.component';

describe('EventsTagsComponent', () => {
  let component: EventsTagsComponent;
  let fixture: ComponentFixture<EventsTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
