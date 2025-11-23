import { testimonials } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '@app/components/page-header/page-header.component';
import { TestimonialSwiperComponent } from "@app/components/testimonial-swiper/testimonial-swiper.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";

@Component({
    selector: 'app-testimonials',
    imports: [PageHeaderComponent, TestimonialSwiperComponent, CommonModule, PaginationComponent],
    templateUrl: './testimonials.component.html',
    styles: ``
})
export class TestimonialsComponent {
testimonials=testimonials
}
