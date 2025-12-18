import { Component } from '@angular/core';
import { HeaderComponent } from "@app/components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { CtaComponent } from "./components/cta/cta.component";
import { FooterComponent } from "@app/components/footer/footer.component";
import { Header3Component } from '@views/home-pages/multi/home-3/components/header-3/header-3.component';

@Component({
    selector: 'app-layout',
    imports: [Header3Component, RouterOutlet, FooterComponent],
    templateUrl: './layout.component.html',
    styles: ``
})
export class LayoutComponent {

}
