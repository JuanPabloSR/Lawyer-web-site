import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GsapRevealDirective } from '@core/directives/gsap-reveal.directive';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { servicesData } from '@/assets/data';

@Component({
    selector: 'app-services-1',
    imports: [SlickCarouselModule,CommonModule,RouterLink,GsapRevealDirective],
    templateUrl: './services-1.component.html',
    styles: ``
})
export class Services1Component {
    services = servicesData

    sliderConfig = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: (".service1-prev-arrow"),
        nextArrow: (".service1-next-arrow"),

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
