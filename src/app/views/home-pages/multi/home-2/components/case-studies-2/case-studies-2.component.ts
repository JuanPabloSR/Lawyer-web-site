import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { caseStudies } from '@/assets/data';

@Component({
    selector: 'app-case-studies-2',
    imports: [CommonModule, RouterLink, SlickCarouselModule],
    templateUrl: './case-studies-2.component.html',
    styles: ``
})
export class CaseStudies2Component {
    caseStudies = caseStudies

    sliderConfig = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: (".case2-prev-arrow"),
        nextArrow: (".case2-next-arrow"),

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
