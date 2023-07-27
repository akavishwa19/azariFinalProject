import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEnd404Component } from './front-end404.component';

describe('FrontEnd404Component', () => {
  let component: FrontEnd404Component;
  let fixture: ComponentFixture<FrontEnd404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontEnd404Component]
    });
    fixture = TestBed.createComponent(FrontEnd404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
