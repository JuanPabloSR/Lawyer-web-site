import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { BlogDetailContentComponent } from "./components/blog-detail-content/blog-detail-content.component";
import { MoreBlogsComponent } from "./components/more-blogs/more-blogs.component";

@Component({
  selector: 'app-blog-details',
  imports: [PageHeaderComponent, BlogDetailContentComponent, MoreBlogsComponent],
  templateUrl: './blog-details.component.html',
  styles: ``
})
export class BlogDetailsComponent {

}
