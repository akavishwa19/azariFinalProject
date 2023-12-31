import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialReviewComponent } from './testimonial-review.component';

describe('TestimonialReviewComponent', () => {
  let component: TestimonialReviewComponent;
  let fixture: ComponentFixture<TestimonialReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialReviewComponent]
    });
    fixture = TestBed.createComponent(TestimonialReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
