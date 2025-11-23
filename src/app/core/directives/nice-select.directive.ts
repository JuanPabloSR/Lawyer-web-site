import { Directive, ElementRef, AfterViewInit } from '@angular/core';

declare var NiceSelect: any;

@Directive({
    selector: '[appNiceSelect]'
})
export class NiceSelectDirective implements AfterViewInit {
    constructor(private el: ElementRef) { }

    ngAfterViewInit(): void {
        if (NiceSelect && typeof NiceSelect.bind === 'function') {
            NiceSelect.bind(this.el.nativeElement);
        } else {
            console.warn('NiceSelect is not available or not loaded.');
        }
    }
}
