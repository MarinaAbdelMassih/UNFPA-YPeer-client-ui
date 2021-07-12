import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsCategoriesComponent } from './publications-categories.component';

describe('PublicationsCategoriesComponent', () => {
  let component: PublicationsCategoriesComponent;
  let fixture: ComponentFixture<PublicationsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
