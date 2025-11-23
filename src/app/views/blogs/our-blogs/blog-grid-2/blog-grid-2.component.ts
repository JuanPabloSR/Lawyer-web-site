import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { blogs } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from "@app/components/cards/blog-card/blog-card.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";

@Component({
    selector: 'app-blog-grid-2',
    imports: [PageHeaderComponent, CommonModule, BlogCardComponent, PaginationComponent],
    templateUrl: './blog-grid-2.component.html',
    styles: ``
})
export class BlogGrid2Component {
    blogs = blogs
}
