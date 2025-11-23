import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { CaseContentComponent } from "../components/case-content/case-content.component";
import { CaseSidebarComponent } from "../components/case-sidebar/case-sidebar.component";
import { MoreCasesComponent } from "../components/more-cases/more-cases.component";

@Component({
  selector: 'app-case-detail-right',
  imports: [PageHeaderComponent, CaseContentComponent, CaseSidebarComponent, MoreCasesComponent],
  templateUrl: './case-detail-right.component.html',
  styles: ``
})
export class CaseDetailRightComponent {

}
