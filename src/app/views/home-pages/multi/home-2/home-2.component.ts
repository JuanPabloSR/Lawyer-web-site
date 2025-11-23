import { Component } from '@angular/core';
import { About2Component } from "./components/about-2/about-2.component";
import { CaseStudies2Component } from "./components/case-studies-2/case-studies-2.component";
import { Header2Component } from "./components/header-2/header-2.component";
import { Hero2Component } from "./components/hero-2/hero-2.component";
import { Services2Component } from "./components/services-2/services-2.component";
import { WhyChoose2Component } from "./components/why-choose-2/why-choose-2.component";
import { Work2Component } from "./components/work-2/work-2.component";
import { Consultation2Component } from "./components/consultation-2/consultation-2.component";
import { Team2Component } from "./components/team-2/team-2.component";
import { Testimonial2Component } from "./components/testimonial-2/testimonial-2.component";
import { Blogs2Component } from "./components/blogs-2/blogs-2.component";
import { Cta2Component } from "./components/cta-2/cta-2.component";
import { Footer2Component } from "./components/footer-2/footer-2.component";

@Component({
  selector: 'app-home-2',
  imports: [Header2Component, Hero2Component, About2Component, Services2Component, Work2Component, WhyChoose2Component, CaseStudies2Component, Consultation2Component, Team2Component, Testimonial2Component, Blogs2Component, Cta2Component, Footer2Component],
  templateUrl: './home-2.component.html',
  styles: ``
})
export class Home2Component {

}
