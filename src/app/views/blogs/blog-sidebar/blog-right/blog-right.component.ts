import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";
import { BlogSidebarComponent } from "../components/blog-sidebar/blog-sidebar.component";
import { BlogCardComponent } from "@app/components/cards/blog-card/blog-card.component";
import { CommonModule } from '@angular/common';
import { blogs } from '@/assets/data';

@Component({
  selector: 'app-blog-right',
  imports: [PageHeaderComponent, PaginationComponent, BlogSidebarComponent, BlogCardComponent,CommonModule],
  templateUrl: './blog-right.component.html',
  styles: ``
})
export class BlogRightComponent {
blogs=blogs
}
