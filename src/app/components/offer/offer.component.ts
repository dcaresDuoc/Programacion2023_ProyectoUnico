import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements AfterViewInit {
  
  constructor() {}

  ngAfterViewInit(): void {
    const productContainers = Array.from(document.querySelectorAll('.product-container'));
    const nxtBtn = Array.from(document.querySelectorAll('.nxt-btn'));
    const preBtn = Array.from(document.querySelectorAll('.pre-btn'));
    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
  }

}