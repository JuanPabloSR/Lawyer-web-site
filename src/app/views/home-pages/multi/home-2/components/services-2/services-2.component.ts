import { Component } from '@angular/core';
import { services } from '../data';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-services-2',
    imports: [CommonModule, SlickCarouselModule,RouterLink],
    templateUrl: './services-2.component.html',
    styles: ``
})
export class Services2Component {
    services = services

    sliderConfig = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: (".service2-prev-arrow"),
        nextArrow: (".service2-next-arrow"),

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
