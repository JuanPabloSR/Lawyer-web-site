import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { teamMembers } from '../data';

@Component({
  selector: 'app-team-2',
  imports: [CommonModule],
  templateUrl: './team-2.component.html',
  styles: ``
})
export class Team2Component {
teamMembers=teamMembers
}
