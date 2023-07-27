import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityBookComponent } from './city-book.component';

describe('CityBookComponent', () => {
  let component: CityBookComponent;
  let fixture: ComponentFixture<CityBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityBookComponent]
    });
    fixture = TestBed.createComponent(CityBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
