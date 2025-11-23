import { Component } from '@angular/core';
import { Header5Component } from "./components/header-5/header-5.component";
import { Hero5Component } from "./components/hero-5/hero-5.component";
import { About5Component } from "./components/about-5/about-5.component";
import { Work5Component } from "./components/work-5/work-5.component";
import { Services5Component } from "./components/services-5/services-5.component";
import { WhyChoose4Component } from "./components/why-choose-4/why-choose-4.component";
import { Team5Component } from "./components/team-5/team-5.component";
import { Contact5Component } from "./components/contact-5/contact-5.component";
import { Testimonial5Component } from "./components/testimonial-5/testimonial-5.component";
import { Blogs5Component } from "./components/blogs-5/blogs-5.component";
import { Footer5Component } from "./components/footer-5/footer-5.component";

@Component({
  selector: 'app-home-5',
  imports: [Header5Component, Hero5Component, About5Component, Work5Component, Services5Component, WhyChoose4Component, Team5Component, Contact5Component, Testimonial5Component, Blogs5Component, Footer5Component],
  templateUrl: './home-5.component.html',
  styles: ``
})
export class Home5Component {

}
