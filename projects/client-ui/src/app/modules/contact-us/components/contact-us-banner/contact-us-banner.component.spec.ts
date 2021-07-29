import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsBannerComponent } from './contact-us-banner.component';

describe('ContactUsBannerComponent', () => {
  let component: ContactUsBannerComponent;
  let fixture: ComponentFixture<ContactUsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
