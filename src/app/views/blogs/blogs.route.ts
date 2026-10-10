import { Routes } from '@angular/router';
import { BlogGrid2Component } from './our-blogs/blog-grid-2/blog-grid-2.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

export const BLOGS_ROUTES: Routes = [
    {
        path: 'blog/grid-2',
        component: BlogGrid2Component,
        data: { title: "Blog Jurídico" }
    },
    {
        path: 'blog-details',
        component: BlogDetailsComponent,
        data: { title: "Detalles del Blog" }
    },
    {
        path: 'blog-details/:slug',
        component: BlogDetailsComponent,
        data: { title: "Detalles del Blog" },
    },
];
