import { blogs as allBlogs } from '@/assets/data';
import type { BlogType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlogCardComponent } from "@app/components/cards/blog-card/blog-card.component";

@Component({
  selector: 'app-more-blogs',
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './more-blogs.component.html',
  styles: ``
})
export class MoreBlogsComponent {
    /** Sin entrada se muestran los tres últimos, como hasta ahora. */
    @Input() blogs: BlogType[] = allBlogs.slice(6, 9);
}
