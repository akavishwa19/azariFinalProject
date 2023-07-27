import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import {
  NgbModule,
  NgbNavItem,
  NgbNavModule,
  NgbNavOutlet,
} from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './siteLanding/search-bar/search-bar.component';
import { InspirationComponent } from './siteLanding/inspiration/inspiration.component';
import { PromoBannerComponent } from './siteLanding/promo-banner/promo-banner.component';
import { MobileSectionComponent } from './siteLanding/mobile-section/mobile-section.component';
import { QuestionSectionComponent } from './siteLanding/question-section/question-section.component';
import { TestimonialReviewComponent } from './siteLanding/testimonial-review/testimonial-review.component';
import { FooterComponent } from './siteLanding/footer/footer.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    InspirationComponent,
    PromoBannerComponent,
    MobileSectionComponent,
    QuestionSectionComponent,
    TestimonialReviewComponent,
    FooterComponent,
    DetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    NgbNavItem,
    NgbNavOutlet,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  exports: [FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
