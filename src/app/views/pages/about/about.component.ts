import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { About1Component } from "../../home-pages/multi/home-1/components/about-1/about-1.component";
import { CompaniesComponent } from "./components/companies/companies.component";
import { AboutAdvicxComponent } from "./components/about-advicx/about-advicx.component";
import { AboutTeamComponent } from "./components/about-team/about-team.component";
import { Team1Component } from "../../home-pages/multi/home-1/components/team-1/team-1.component";

@Component({
  selector: 'app-about',
  imports: [PageHeaderComponent, About1Component, CompaniesComponent, AboutAdvicxComponent, AboutTeamComponent, Team1Component],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {

}
