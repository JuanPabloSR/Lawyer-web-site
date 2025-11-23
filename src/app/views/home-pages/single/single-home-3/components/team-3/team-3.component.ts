import { teamMembers } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MemberCardComponent } from "@app/components/cards/member-card/member-card.component";

@Component({
    selector: 'app-team-3',
    imports: [CommonModule, MemberCardComponent],
    templateUrl: './team-3.component.html',
    styles: ``
})
export class Team3Component {
    teamMembers = teamMembers
}
