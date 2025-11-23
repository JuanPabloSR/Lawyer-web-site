import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { BlogDetailSidebarComponent } from "../components/blog-detail-sidebar/blog-detail-sidebar.component";
import { BlogDetailContentComponent } from "../components/blog-detail-content/blog-detail-content.component";
import { MoreBlogsComponent } from "../components/more-blogs/more-blogs.component";

@Component({
  selector: 'app-blog-detail-left',
  imports: [PageHeaderComponent, BlogDetailSidebarComponent, BlogDetailContentComponent, MoreBlogsComponent],
  templateUrl: './blog-detail-left.component.html',
  styles: ``
})
export class BlogDetailLeftComponent {

}
