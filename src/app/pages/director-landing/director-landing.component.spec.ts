import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorLandingComponent } from './director-landing.component';

describe('DirectorLandingComponent', () => {
  let component: DirectorLandingComponent;
  let fixture: ComponentFixture<DirectorLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorLandingComponent]
    });
    fixture = TestBed.createComponent(DirectorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
