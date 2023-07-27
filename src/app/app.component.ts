import { Component, OnInit } from '@angular/core';
declare let Swiper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'xity';

  constructor() {}

  ngOnInit() {
    // //We loading the player script on after view is loaded
    // import('src/assets/js/scripts.js');
    // import('src/assets/js/plugins.js');
  }
}
