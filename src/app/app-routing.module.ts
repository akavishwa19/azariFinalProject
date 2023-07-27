import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteLandingpageComponent} from "./siteLanding/site-landingpage/site-landingpage.component";
import {DetailsPageComponent} from "./details-page/details-page.component";
import {Error404Component} from "./pages/error404/error404.component";
import {FrontEnd404Component} from "./front-end404/front-end404.component";
import { ListingPageComponent } from './listing-page/listing-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'portal',
    loadChildren: () =>
      import('./portal/portal.module').then((m) => m.PortalModule),
  },
  {
    path:'siteLanding',
    component:SiteLandingpageComponent
  },
  {
    path:'details',
    component:DetailsPageComponent
  }
  ,
  {
   path:'404frontEnd',
   component:FrontEnd404Component
  }
  ,
 {
  path:'listing',
  component:ListingPageComponent
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
