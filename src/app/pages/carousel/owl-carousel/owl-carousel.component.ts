import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.css']
})
export class OwlCarouselComponent implements OnInit {


  Images = ['assets/images/carousel/coding.jpg',
            'assets/images/carousel/photo.jpg',
            'assets/images/carousel/read.jpg',
            'assets/images/carousel/cook.jpg',
            'assets/images/carousel/travel.jpg',
            'assets/images/carousel/cinema.jpg',
            'assets/images/carousel/theater.jpg',
            'assets/images/carousel/pionerasDev.png'];


  SlideOptions = {
    items: 2,
    dots: false,
    nav: true,
    loop: true,
    margin: 0,
    autoWidth: false,
    navText: ['<i class="fa fa-chevron-circle-left" title="Previous"></i>', '<i class="fa fa-chevron-circle-right" title="Next"></i>'],
    responsive: {
      0: {
          items: 1
      },
      500: {
          items: 2,
          margin: 20
      },
      800: {
          items: 3,
          margin: 20
      },
      1000: {
          items: 4,
          margin: 20
      }
    }
  };
  CarouselOptions = {
    items: 6,
    dots: false,
    nav: true,
    loop: true,
};

  constructor() { }

  ngOnInit() {
  }

}
