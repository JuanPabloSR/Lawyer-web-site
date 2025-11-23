import { Component } from '@angular/core';
import { Header3Component } from "./components/header-3/header-3.component";
import { Hero3Component } from "./components/hero-3/hero-3.component";
import { About3Component } from "./components/about-3/about-3.component";
import { Services3Component } from "./components/services-3/services-3.component";
import { Work3Component } from "./components/work-3/work-3.component";
import { CaseStudies3Component } from "./components/case-studies-3/case-studies-3.component";
import { Team3Component } from "./components/team-3/team-3.component";
import { Testimonial3Component } from "./components/testimonial-3/testimonial-3.component";
import { Blogs3Component } from "./components/blogs-3/blogs-3.component";
import { Cta3Component } from "./components/cta-3/cta-3.component";
import { Footer3Component } from "./components/footer-3/footer-3.component";

@Component({
  selector: 'app-home-3',
  imports: [Header3Component, Hero3Component, About3Component, Services3Component, Work3Component, CaseStudies3Component, Team3Component, Testimonial3Component, Blogs3Component, Cta3Component, Footer3Component],
  templateUrl: './home-3.component.html',
  styles: ``
})
export class Home3Component {

}
