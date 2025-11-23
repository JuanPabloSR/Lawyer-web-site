import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { testimonials } from '../data';

@Component({
    selector: 'app-testimonial-3',
    imports: [CommonModule, SlickCarouselModule],
    templateUrl: './testimonial-3.component.html',
    styles: ``
})
export class Testimonial3Component {
    testimonials = testimonials

    sliderConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slider-boxarea2",
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        loop: true,
        autoplay: false,
        autoplaySpeed:2000,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    sliderThumbConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay:false,
        autoplaySpeed:2000,
        loop: true,
        focusOnSelect: true,
        vertical:true,
        asNavFor: ".testimonial-horizental-slider2",
        infinite: true,
        prevArrow: ('.next-arrow'),
        nextArrow: ('.prev-arrow'),
    }
}
