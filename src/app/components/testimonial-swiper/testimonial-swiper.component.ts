import { TestimonialSlides } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { SwiperDirective } from '@core/directives/swiper-directive.component';
import { Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

@Component({
    selector: 'app-testimonial-swiper',
    imports: [CommonModule, SwiperDirective],
    templateUrl: './testimonial-swiper.component.html',
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialSwiperComponent {
    @Input() buttonClass?: string;
    testimonials = TestimonialSlides
    thumbImages = ["assets/img/testimonial/tes1-author1.png", "assets/img/testimonial/tes1-author2.png", "assets/img/testimonial/tes1-author3.png", "assets/img/testimonial/tes1-author4.png", "assets/img/testimonial/tes1-author5.png", "assets/img/testimonial/tes1-author6.png"]

    swiperThumbConfig: SwiperOptions = {
        spaceBetween: 10,
        slidesPerView: 6,
        modules: [Navigation],
        freeMode: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    };
    swiperConfig: SwiperOptions = {
        spaceBetween: 10,
        loop: true,
        freeMode: true,
        modules: [Navigation],
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        a11y: false,
    };
}
