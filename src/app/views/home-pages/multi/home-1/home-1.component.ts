import { Component } from '@angular/core';
import { LayoutComponent } from "@layouts/layout.component";
import { Hero1Component } from "./components/hero-1/hero-1.component";
import { About1Component } from "./components/about-1/about-1.component";
import { Services1Component } from "./components/services-1/services-1.component";
import { Work1Component } from "./components/work-1/work-1.component";
import { CaseStudies1Component } from "./components/case-studies-1/case-studies-1.component";
import { Team1Component } from "./components/team-1/team-1.component";
import { Testimonial1Component } from "./components/testimonial-1/testimonial-1.component";
import { Blogs1Component } from "./components/blogs-1/blogs-1.component";

@Component({
  selector: 'app-home-1',
  imports: [Hero1Component, LayoutComponent, About1Component, Services1Component, Work1Component, CaseStudies1Component, Team1Component, Testimonial1Component, Blogs1Component],
  templateUrl: './home-1.component.html',
  styles: ``
})
export class Home1Component {

}
