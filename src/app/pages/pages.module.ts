import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LegalComponent } from './legal/legal.component';
import { LoaderComponent } from './loader/loader.component';
import { HolmesComponent } from './holmes/holmes.component';
import { Error404Component } from './error404/error404.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import {NgbModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { JoinUsComponent } from '../siteLanding/join-us/join-us.component';
import { SiteLandingpageComponent } from '../siteLanding/site-landingpage/site-landingpage.component';
import { FindTheBestPlacesComponent } from '../siteLanding/find-the-best-places/find-the-best-places.component';
import { SearchBarComponent } from '../siteLanding/search-bar/search-bar.component';
import { LocationLandingComponent } from './location-landing/location-landing.component';
import { DirectorLandingComponent } from './director-landing/director-landing.component';
import {NgSelectModule} from "@ng-select/ng-select";



@NgModule({
  declarations: [

    PagesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LegalComponent,
    LoaderComponent,
    HolmesComponent,
    Error404Component,
    ComingSoonComponent,
    FooterComponent,
    JoinUsComponent,
    SiteLandingpageComponent,
    FindTheBestPlacesComponent,
    SearchBarComponent,
    LocationLandingComponent,
    DirectorLandingComponent,


  ],
  exports: [HolmesComponent, Error404Component, ComingSoonComponent, HeaderComponent , FooterComponent],
    imports: [CommonModule, NgbNavModule, NgbModule, PagesRoutingModule, [(NgbNavModule)], NgSelectModule],
})
export class PagesModule {}
