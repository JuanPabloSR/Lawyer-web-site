import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "@app/components/footer/footer.component";
import { Header3Component } from '@app/components/header-3/header-3.component';

@Component({
    selector: 'app-layout',
    imports: [Header3Component, RouterOutlet, FooterComponent],
    templateUrl: './layout.component.html',
    styles: ``
})
export class LayoutComponent {

}
