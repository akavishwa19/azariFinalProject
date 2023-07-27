import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images = [
    {
      pic: 'assets/firstImage.jpg',
      name: 'Michael J',
    },
    {
      pic: 'assets/secondImage.jpg',
      name: 'Jullian H',
    },
    {
      pic: 'assets/thirdImage.jpg',
      name: 'Petterson S',
    },
    {
      pic: 'assets/secondImage.jpg',
      name: 'Jullian H',
    },
  ];
}
