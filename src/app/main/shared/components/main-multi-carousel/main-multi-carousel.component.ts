import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-multi-carousel',
  templateUrl: './main-multi-carousel.component.html',
  styleUrls: ['./main-multi-carousel.component.css']
})
export class MainMultiCarouselComponent implements OnInit {

  itemsPerSlide = 4;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides = [
    {image: 'assets/images/gallery/01_gallery.jpg'},
    {image: 'assets/images/gallery/02_gallery.jpg'},
    {image: 'assets/images/gallery/03_gallery.jpg'},
    {image: 'assets/images/gallery/04_gallery.jpg'},
    {image: 'assets/images/gallery/05_gallery.jpg'},
    {image: 'assets/images/gallery/06_gallery.jpg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }

}
