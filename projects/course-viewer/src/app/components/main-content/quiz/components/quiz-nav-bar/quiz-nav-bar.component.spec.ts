import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizNavBarComponent } from './quiz-nav-bar.component';

describe('QuizNavBarComponent', () => {
  let component: QuizNavBarComponent;
  let fixture: ComponentFixture<QuizNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
