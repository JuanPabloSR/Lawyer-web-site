import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestimonialSwiperComponent } from "@app/components/testimonial-swiper/testimonial-swiper.component";

@Component({
    selector: 'app-testimonial-1',
    imports: [CommonModule, TestimonialSwiperComponent],
    templateUrl: './testimonial-1.component.html',
    styles: ``,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonial1Component {

}
