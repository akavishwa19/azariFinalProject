import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTheBestPlacesComponent } from './find-the-best-places.component';

describe('FindTheBestPlacesComponent', () => {
  let component: FindTheBestPlacesComponent;
  let fixture: ComponentFixture<FindTheBestPlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindTheBestPlacesComponent]
    });
    fixture = TestBed.createComponent(FindTheBestPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
