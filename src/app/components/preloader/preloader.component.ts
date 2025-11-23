import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-preloader',
    imports: [CommonModule],
    templateUrl: './preloader.component.html',
    styles: ``
})
export class PreloaderComponent implements OnInit {
    showPreloader: boolean = true;

    ngOnInit() {
        setTimeout(() => {
            this.showPreloader = false;
        }, 400);
    }
}
