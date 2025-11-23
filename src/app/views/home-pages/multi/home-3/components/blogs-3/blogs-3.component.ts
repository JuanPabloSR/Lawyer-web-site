import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { latestBlogs } from '../data';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blogs-3',
    imports: [CommonModule,RouterLink],
    templateUrl: './blogs-3.component.html',
    styles: ``
})
export class Blogs3Component {
    latestBlogs = latestBlogs
}
