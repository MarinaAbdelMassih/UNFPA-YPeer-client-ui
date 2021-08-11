import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsViewImageComponent } from './event-details-view-image.component';

describe('EventDetailsViewImageComponent', () => {
  let component: EventDetailsViewImageComponent;
  let fixture: ComponentFixture<EventDetailsViewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsViewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsViewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
