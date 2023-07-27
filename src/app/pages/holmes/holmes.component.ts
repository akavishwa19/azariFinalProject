import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-holmes',
  templateUrl: './holmes.component.html',
  styleUrls: ['./holmes.component.scss'],
})
export class HolmesComponent {
  home() {
    window.open('/home', '_self');
  }

  @HostListener('window:scroll') onScroll(e: Event): void {
    console.log('Scroll');
    window.open('/home', '_self');
  }
}
