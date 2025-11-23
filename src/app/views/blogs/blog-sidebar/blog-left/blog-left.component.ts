import { blogs } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { BlogCardComponent } from "@app/components/cards/blog-card/blog-card.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";
import { BlogSidebarComponent } from '../components/blog-sidebar/blog-sidebar.component';

@Component({
    selector: 'app-blog-left',
    imports: [PageHeaderComponent, CommonModule, BlogCardComponent, PaginationComponent,BlogSidebarComponent],
    templateUrl: './blog-left.component.html',
    styles: ``
})
export class BlogLeftComponent {
    blogs = blogs
}
