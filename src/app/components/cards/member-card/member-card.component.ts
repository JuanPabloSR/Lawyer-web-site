import type { MemberType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-member-card',
    imports: [CommonModule],
    templateUrl: './member-card.component.html',
    styles: ``
})
export class MemberCardComponent {
    @Input() member!: MemberType;
    @Input() containerClass: string = "team1-box";

    getCustomStyle(memberName: string): Record<string, string> {
        const base: Record<string, string> = {
            'object-fit': 'cover',
            'object-position': 'top center',
            'width': '100%',
            'height': '100%',
        };

        if (memberName === 'JORGE ALBERTO VERA VILLAMIZAR') {
            return {
                ...base,
                'transform': 'scale(1.45) translateY(-20%)',
                'transform-origin': 'top center',
            };
        }

        if (memberName === 'JAIRO ENRIQUE SILVA SANTAMARIA') {
            return {
                ...base,
                'transform': 'scale(1.05) translateY(30%)',
                'transform-origin': 'top center',
            };
        }

        return base;
    }
}
