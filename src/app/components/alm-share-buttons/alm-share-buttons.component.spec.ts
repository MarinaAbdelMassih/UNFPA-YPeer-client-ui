import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmShareButtonsComponent } from './alm-share-buttons.component';

describe('AlmShareButtonsComponent', () => {
  let component: AlmShareButtonsComponent;
  let fixture: ComponentFixture<AlmShareButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmShareButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmShareButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
