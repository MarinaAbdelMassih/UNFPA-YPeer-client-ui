import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesTagsComponent } from './resources-tags.component';

describe('ResourcesTagsComponent', () => {
  let component: ResourcesTagsComponent;
  let fixture: ComponentFixture<ResourcesTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
