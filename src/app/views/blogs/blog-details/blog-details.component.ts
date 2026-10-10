import { blogDetails, blogs, defaultBlogDetail } from '@/assets/data';
import { Component, computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map, skip } from 'rxjs';
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
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    private slug = toSignal(
        this.route.paramMap.pipe(map(params => params.get('slug'))),
        { initialValue: this.route.snapshot.paramMap.get('slug') }
    );

    /** Artículo de la URL; sin slug (/blog-details) se mantiene la página genérica de siempre. */
    post = computed(() => blogs.find(b => b.slug === this.slug()));

    detail = computed(() => blogDetails.find(d => d.slug === this.slug()) ?? defaultBlogDetail);

    title = computed(() => this.post()?.title ?? 'Detalles del Blog');

    image = computed(() => this.post()?.image ?? 'assets/img/blog/blog-details-image1.webp');

    /** "Ver más artículos": otros tres, sin repetir el actual. */
    moreBlogs = computed(() =>
        this.post() ? blogs.filter(b => b.slug !== this.post()!.slug).slice(0, 3) : blogs.slice(6, 9)
    );

    constructor() {
        // Al saltar de un artículo a otro desde "Ver más artículos" el componente se reutiliza: volver arriba.
        this.route.paramMap.pipe(skip(1), takeUntilDestroyed())
            .subscribe(() => window.scrollTo({ top: 0 }));

        effect(() => {
            const slug = this.slug();
            if (slug && !blogDetails.some(d => d.slug === slug)) {
                this.router.navigateByUrl('/blog/grid-2', { replaceUrl: true });
            }
        });
    }
}
