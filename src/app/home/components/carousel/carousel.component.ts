import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  slider: any;
  sliderSections: any;
  sliderSectionLast: any;
  btnLeft: any;
  btnRight: any;

  ngOnInit() {
    this.slider = document.querySelector(".slider");
    this.sliderSections = document.querySelectorAll(".slider_item");
    this.sliderSectionLast = this.sliderSections[this.sliderSections.length - 1];
    this.btnLeft = document.querySelector("#btn-left");
    this.btnRight = document.querySelector("#btn-right");

    this.slider.insertAdjacentElement('afterbegin', this.sliderSectionLast);

    this.btnRight?.addEventListener('click', () => {
      this.next();
    });

    this.btnLeft?.addEventListener('click', () => {
      this.prev();
    });
  }
  

  next() {
    let sliderSectionFirst = document.querySelectorAll(".slider_item")[0];
    this.slider.style.marginLeft = "-200%";
    this.slider.style.transition = "all 0.5s";
    setTimeout(() => {
      this.slider.style.transition = "none";
      this.slider.insertAdjacentElement('beforeend', sliderSectionFirst);
      this.slider.style.marginLeft = "-100%";
    }, 500);
  }

  prev() {
    let sliderSection = document.querySelectorAll(".slider_item");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    this.slider.style.marginLeft = "0";
    this.slider.style.transition = "all 0.5s";
    setTimeout(() => {
      this.slider.style.transition = "none";
      this.slider.insertAdjacentElement('afterbegin', sliderSectionLast);
      this.slider.style.marginLeft = "-100%";
    }, 500);
  }

}
