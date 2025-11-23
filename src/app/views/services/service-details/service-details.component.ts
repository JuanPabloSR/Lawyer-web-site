import { Component } from '@angular/core';
import { ServiceContentComponent } from "./components/service-content/service-content.component";
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";

@Component({
  selector: 'app-service-details',
  imports: [ServiceContentComponent, PageHeaderComponent],
  templateUrl: './service-details.component.html',
  styles: ``
})
export class ServiceDetailsComponent {

}
