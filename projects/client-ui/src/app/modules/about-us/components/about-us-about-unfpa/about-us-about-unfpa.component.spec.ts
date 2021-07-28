import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsAboutUnfpaComponent } from './about-us-about-unfpa.component';

describe('AboutUsAboutUnfpaComponent', () => {
  let component: AboutUsAboutUnfpaComponent;
  let fixture: ComponentFixture<AboutUsAboutUnfpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsAboutUnfpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsAboutUnfpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
