import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { ServiceContentComponent } from "../components/service-content/service-content.component";
import { ServiceSidebarComponent } from "../components/service-sidebar/service-sidebar.component";

@Component({
  selector: 'app-service-details-right',
  imports: [PageHeaderComponent, ServiceContentComponent, ServiceSidebarComponent],
  templateUrl: './service-details-right.component.html',
  styles: ``
})
export class ServiceDetailsRightComponent {

}
