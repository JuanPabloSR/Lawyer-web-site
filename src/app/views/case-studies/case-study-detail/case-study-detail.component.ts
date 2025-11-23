import { Component } from '@angular/core';
import { CaseContentComponent } from "./components/case-content/case-content.component";
import { MoreCasesComponent } from "./components/more-cases/more-cases.component";
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";

@Component({
  selector: 'app-case-study-detail',
  imports: [CaseContentComponent, MoreCasesComponent, PageHeaderComponent],
  templateUrl: './case-study-detail.component.html',
  styles: ``
})
export class CaseStudyDetailComponent {

}
