import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { heroSliderData } from '../data';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero-1',
    imports: [SlickCarouselModule,CommonModule,RouterLink],
    templateUrl: './hero-1.component.html',
    styles: ``
})
export class Hero1Component {
    sliderConfig = {
        margin: "30",
        slidesToShow: 1,
        arrows: true,
        prevArrow: (".tes2-prev-arrow"),
        nextArrow: (".tes2-next-arrow"),
        // centerMode: true,
        dots: false,
        loop: true,
        centerMode: false,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        fadeSpeed: 1000,
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
    heroSlides = heroSliderData
}
