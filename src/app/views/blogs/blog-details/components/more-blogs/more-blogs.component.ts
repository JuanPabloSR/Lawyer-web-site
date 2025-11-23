import { blogs } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogCardComponent } from "@app/components/cards/blog-card/blog-card.component";

@Component({
  selector: 'app-more-blogs',
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './more-blogs.component.html',
  styles: ``
})
export class MoreBlogsComponent {
blogs=blogs
}
