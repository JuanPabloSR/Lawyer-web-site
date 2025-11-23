import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-header',
    imports: [RouterLink],
    templateUrl: './page-header.component.html',
})
export class PageHeaderComponent {
    @Input() title!:string
}
