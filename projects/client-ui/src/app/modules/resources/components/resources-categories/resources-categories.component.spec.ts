import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesCategoriesComponent } from './resources-categories.component';

describe('ResourcesCategoriesComponent', () => {
  let component: ResourcesCategoriesComponent;
  let fixture: ComponentFixture<ResourcesCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
