import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsCategoriesComponent } from './event-details-categories.component';

describe('EventDetailsCategoriesComponent', () => {
  let component: EventDetailsCategoriesComponent;
  let fixture: ComponentFixture<EventDetailsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
