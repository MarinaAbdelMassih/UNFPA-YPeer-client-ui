import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsTagsComponent } from './trainings-tags.component';

describe('TrainingsTagsComponent', () => {
  let component: TrainingsTagsComponent;
  let fixture: ComponentFixture<TrainingsTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
