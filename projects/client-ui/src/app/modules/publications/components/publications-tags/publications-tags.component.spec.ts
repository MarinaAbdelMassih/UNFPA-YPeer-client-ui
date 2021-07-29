import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsTagsComponent } from './publications-tags.component';

describe('PublicationsTagsComponent', () => {
  let component: PublicationsTagsComponent;
  let fixture: ComponentFixture<PublicationsTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
