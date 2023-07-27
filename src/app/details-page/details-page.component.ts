import { Component } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent {
  items = [
    { title: 'Accordion Item 1', content: 'Content for item 1', open: false },
  ];

  toggleAccordion(item: any) {
    item.open = !item.open;
  }

  active = 1;
}
