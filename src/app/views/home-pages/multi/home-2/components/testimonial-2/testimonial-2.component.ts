import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { testimonials } from '../data';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GsapRevealDirective } from '@core/directives/gsap-reveal.directive';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-testimonial-2',
    imports: [CommonModule, SlickCarouselModule,GsapRevealDirective,RouterLink],
    templateUrl: './testimonial-2.component.html',
    styles: ``
})
export class Testimonial2Component {
    testimonials = testimonials

    sliderConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        asNavFor: '.slider-galeria-thumbs',
        prevArrow: ('.testimonial-next-arrow'),
        nextArrow: ('.testimonial-prev-arrow'),
    }

    sliderThumbsConfig = {
        slidesToShow: 4,
        slidesToScroll: 1,
        items: 15,
        arrows: true,
        asNavFor: '.slider-galeria',
        vertical: true,
        infinite: true,
        verticalSwiping: true,
        focusOnSelect: true,
        prevArrow: ('.testimonial-next-arrow'),
        nextArrow: ('.testimonial-prev-arrow'),
    }
}
