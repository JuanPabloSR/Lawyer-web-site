import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogPosts } from '../data';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blogs-2',
    imports: [CommonModule,RouterLink],
    templateUrl: './blogs-2.component.html',
    styles: ``
})
export class Blogs2Component {
    blogPosts = blogPosts
}
