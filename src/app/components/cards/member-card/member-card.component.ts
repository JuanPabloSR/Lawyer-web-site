import type { MemberType } from '@/types';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-member-card',
    imports: [],
    templateUrl: './member-card.component.html',
    styles: ``
})
export class MemberCardComponent {
    @Input() member!: MemberType
    @Input() containerClass?: string
}
