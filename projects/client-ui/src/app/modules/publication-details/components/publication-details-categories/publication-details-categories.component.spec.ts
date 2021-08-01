import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationDetailsCategoriesComponent } from './publication-details-categories.component';

describe('PublicationDetailsCategoriesComponent', () => {
  let component: PublicationDetailsCategoriesComponent;
  let fixture: ComponentFixture<PublicationDetailsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationDetailsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationDetailsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
