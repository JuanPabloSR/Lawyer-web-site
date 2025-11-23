import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { BlogDetailContentComponent } from "../components/blog-detail-content/blog-detail-content.component";
import { BlogDetailSidebarComponent } from "../components/blog-detail-sidebar/blog-detail-sidebar.component";
import { MoreBlogsComponent } from "../components/more-blogs/more-blogs.component";

@Component({
  selector: 'app-blog-detail-right',
  imports: [PageHeaderComponent, BlogDetailContentComponent, BlogDetailSidebarComponent, MoreBlogsComponent],
  templateUrl: './blog-detail-right.component.html',
  styles: ``
})
export class BlogDetailRightComponent {

}
