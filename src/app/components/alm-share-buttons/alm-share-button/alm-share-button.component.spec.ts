import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmShareButtonComponent } from './alm-share-button.component';

describe('AlmShareButtonComponent', () => {
  let component: AlmShareButtonComponent;
  let fixture: ComponentFixture<AlmShareButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmShareButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmShareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
