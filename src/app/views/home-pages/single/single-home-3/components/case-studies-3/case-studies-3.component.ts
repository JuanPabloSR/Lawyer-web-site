import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { caseStudyData } from '../data';

@Component({
    selector: 'app-case-studies-3',
    imports: [CommonModule, RouterLink, SlickCarouselModule],
    templateUrl: './case-studies-3.component.html',
    styles: ``
})
export class CaseStudies3Component {
    caseStudies = caseStudyData

    sliderConfig = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: (".case3-prev-arrow"),
        nextArrow: (".case3-next-arrow"),

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
