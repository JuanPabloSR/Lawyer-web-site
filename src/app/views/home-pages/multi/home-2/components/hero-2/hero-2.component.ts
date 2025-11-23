import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
    selector: 'app-hero-2',
    imports: [SlickCarouselModule, CommonModule,RouterLink],
    templateUrl: './hero-2.component.html',
    styles: ``
})
export class Hero2Component {
    sliderImages = ["assets/img/bg/hero2-bg1.jpg", "assets/img/bg/hero2-bg2.jpg"]


    sliderConfig = {
        margin: "30",
        slidesToShow: 1,
        arrows: true,
        prevArrow: (".tes2-prev-arrow"),
        nextArrow: (".tes2-next-arrow"),
        centerMode: true,
        dots: false,
        loop: true,
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
}
