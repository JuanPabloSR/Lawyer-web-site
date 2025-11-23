import { Component } from '@angular/core';
import { SingleHeader4Component } from "./components/single-header-4/single-header-4.component";
import { Hero4Component } from "./components/hero-4/hero-4.component";
import { About4Component } from "./components/about-4/about-4.component";
import { Services4Component } from "./components/services-4/services-4.component";
import { Work4Component } from "./components/work-4/work-4.component";
import { CaseStudies4Component } from "./components/case-studies-4/case-studies-4.component";
import { Team4Component } from "./components/team-4/team-4.component";
import { Testimonial4Component } from "./components/testimonial-4/testimonial-4.component";
import { Blogs4Component } from "./components/blogs-4/blogs-4.component";
import { Contact4Component } from "./components/contact-4/contact-4.component";
import { Cta4Component } from "./components/cta-4/cta-4.component";
import { Footer4Component } from "./components/footer-4/footer-4.component";

@Component({
  selector: 'app-single-home-4',
  imports: [SingleHeader4Component, Hero4Component, About4Component, Services4Component, Work4Component, CaseStudies4Component, Team4Component, Testimonial4Component, Blogs4Component, Contact4Component, Cta4Component, Footer4Component],
  templateUrl: './single-home-4.component.html',
  styles: ``
})
export class SingleHome4Component {

}
