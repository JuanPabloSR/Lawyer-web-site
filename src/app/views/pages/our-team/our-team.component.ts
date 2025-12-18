import { teamMembers } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MemberCardComponent } from "@app/components/cards/member-card/member-card.component";
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-our-team',
    imports: [PageHeaderComponent, CommonModule, MemberCardComponent, NgbPaginationModule],
    templateUrl: './our-team.component.html',
    styles: ``
})
export class OurTeamComponent {
    teamMembers = teamMembers
    page = 1;
}
