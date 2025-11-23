import { teamMembers } from '@/assets/data';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MemberCardComponent } from "@app/components/cards/member-card/member-card.component";
import { CircleProgressOptions, NgCircleProgressModule } from 'ng-circle-progress';

@Component({
    selector: 'app-team-1',
    imports: [NgFor, MemberCardComponent, NgCircleProgressModule],
    templateUrl: './team-1.component.html',
    styles: ``,
    providers: [
        {
            provide: CircleProgressOptions,
        }
    ]
})
export class Team1Component {
    teamMembers = teamMembers

    progressItems = [
        { percent: 85 },
        { percent: 70 },
        { percent: 60 },
        { percent: 90 }
    ];
}
