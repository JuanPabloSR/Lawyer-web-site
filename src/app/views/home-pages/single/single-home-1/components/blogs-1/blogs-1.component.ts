import { blogs } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogCardComponent } from "@app/components/cards/blog-card/blog-card.component";

@Component({
    selector: 'app-blogs-1',
    imports: [CommonModule, BlogCardComponent],
    templateUrl: './blogs-1.component.html',
    styles: ``
})
export class Blogs1Component {
    blogs = blogs
}
