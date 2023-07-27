import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLandingpageComponent } from './site-landingpage.component';

describe('SiteLandingpageComponent', () => {
  let component: SiteLandingpageComponent;
  let fixture: ComponentFixture<SiteLandingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteLandingpageComponent]
    });
    fixture = TestBed.createComponent(SiteLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
