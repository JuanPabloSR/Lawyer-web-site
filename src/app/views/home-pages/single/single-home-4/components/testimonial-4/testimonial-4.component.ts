import { testimonials } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
    selector: 'app-testimonial-4',
    imports: [CommonModule, SlickCarouselModule],
    templateUrl: './testimonial-4.component.html',
    styles: ``
})
export class Testimonial4Component {
    testimonials = testimonials

    testimonialConfig={
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: (".tes4-prev-arrow"),
        nextArrow: (".tes4-next-arrow"),
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
    }
}
