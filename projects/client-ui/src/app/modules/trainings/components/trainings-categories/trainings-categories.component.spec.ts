import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsCategoriesComponent } from './trainings-categories.component';

describe('TrainingsCategoriesComponent', () => {
  let component: TrainingsCategoriesComponent;
  let fixture: ComponentFixture<TrainingsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
