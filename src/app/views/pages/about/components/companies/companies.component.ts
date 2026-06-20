import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
    selector: 'app-companies',
    imports: [SlickCarouselModule, CommonModule],
    templateUrl: './companies.component.html',
    styles: ``
})
export class CompaniesComponent {
    companyImages = [
        "assets/img/aliados/pinilla_consultores_logo.jpeg",
        "assets/img/aliados/pinilla_consultores_logo.jpeg",
        "assets/img/aliados/pinilla_consultores_logo.jpeg",
        "assets/img/aliados/pinilla_consultores_logo.jpeg",
    ]

    sliderConfig = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],

    }
}
