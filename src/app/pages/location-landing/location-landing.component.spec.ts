import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationLandingComponent } from './location-landing.component';

describe('LocationLandingComponent', () => {
  let component: LocationLandingComponent;
  let fixture: ComponentFixture<LocationLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationLandingComponent]
    });
    fixture = TestBed.createComponent(LocationLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
