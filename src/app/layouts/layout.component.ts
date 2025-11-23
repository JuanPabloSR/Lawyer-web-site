import { Component } from '@angular/core';
import { HeaderComponent } from "@app/components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { CtaComponent } from "./components/cta/cta.component";
import { FooterComponent } from "@app/components/footer/footer.component";

@Component({
    selector: 'app-layout',
    imports: [HeaderComponent, RouterOutlet, CtaComponent, FooterComponent],
    templateUrl: './layout.component.html',
    styles: ``
})
export class LayoutComponent {

}
