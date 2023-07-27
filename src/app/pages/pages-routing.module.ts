import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';
import { HolmesComponent } from './holmes/holmes.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { Error404Component } from './error404/error404.component';
import {LocationLandingComponent} from "./location-landing/location-landing.component";
import {DirectorLandingComponent} from "./director-landing/director-landing.component";


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HolmesComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'legal',
        component: LegalComponent,
      },

      {
        path: 'coming-soon',
        component: ComingSoonComponent,
      },
      {
        path: '404',
        component: Error404Component,
      },
      {
        path:'locationLanding',
        component:LocationLandingComponent
      },
      {
        path:'directoryLanding',
        component:DirectorLandingComponent
      }
     ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
