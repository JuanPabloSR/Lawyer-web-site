import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { CaseSidebarComponent } from "../components/case-sidebar/case-sidebar.component";
import { CaseContentComponent } from "../components/case-content/case-content.component";
import { MoreCasesComponent } from "../components/more-cases/more-cases.component";

@Component({
  selector: 'app-case-detail-left',
  imports: [PageHeaderComponent, CaseSidebarComponent, CaseContentComponent, MoreCasesComponent],
  templateUrl: './case-detail-left.component.html',
  styles: ``
})
export class CaseDetailLeftComponent {

}
