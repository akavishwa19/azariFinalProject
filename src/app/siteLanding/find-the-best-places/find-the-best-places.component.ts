import { Component } from '@angular/core';

@Component({
  selector: 'app-find-the-best-places',
  templateUrl: './find-the-best-places.component.html',
  styleUrls: ['./find-the-best-places.component.scss']
})
export class FindTheBestPlacesComponent {

x='Build and manage professional local directory website on Xity Platform. Leveraging your business power is incredibly important. That’s why we have integrated a comprehensive directory profile on our site';
title='Design';
design(){
  this.x='Build and manage professional local directory website on Xity Platform. Leveraging your business power is incredibly important. That’s why we have integrated a comprehensive directory profile on our site.'
this.title="Design";
}

hosting(){
  this.x='	The speed of your directory will determine its success. We’ve pulled out all the stops to provide you with optimized and secure hosting. Using the latest hosting technologies, our server management team continuously works to ensure optimal speeds and security.'
this.title="Hosting";
}

security(){
  this.x='Xity platform automatically performs daily backups of data and uploaded files every 24 hours. SSL security protects confidential customer information such as their password, credit card info and more. IP address tracking and unsuccessful login protection included.'
this.title="Security";
}

followers(){
  this.x='Your business profile accepts followers. Quickly create promotion, get new followers, connect with existing followers, manage existing followers and collect / send the information you want from followers.'
this.title="Followers";
}

dashboard(){
  this.x='Simplify your management tasks and focus on your business’s growth. Businesses can update their contact information, subscriptions, keep track of leads and reviews, upload content and more from their dashboard account.'
this.title="Dashboard";
}

leadgen(){
  this.x='Your business profile will attract visitors who want to contact you – we call these inquiries LEADS. Your site will start to generate many leads which you can pursue for business opportunities. The included lead generation tools are automated, requiring very little time and management.'
this.title="Lead-Gen";
}

}
