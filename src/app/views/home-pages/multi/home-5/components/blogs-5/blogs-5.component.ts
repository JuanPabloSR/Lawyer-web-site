import { blogs } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blogs-5',
    imports: [CommonModule,RouterLink],
    templateUrl: './blogs-5.component.html',
    styles: ``
})
export class Blogs5Component {
    blogs = blogs
}
