import { Routes } from '@angular/router';
import { BlogGrid2Component } from './our-blogs/blog-grid-2/blog-grid-2.component';
import { BlogGrid3Component } from './our-blogs/blog-grid-3/blog-grid-3.component';
import { BlogLeftComponent } from './blog-sidebar/blog-left/blog-left.component';
import { BlogRightComponent } from './blog-sidebar/blog-right/blog-right.component';
import { BlogDetailLeftComponent } from './blog-details/blog-detail-left/blog-detail-left.component';
import { BlogDetailRightComponent } from './blog-details/blog-detail-right/blog-detail-right.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

export const BLOGS_ROUTES: Routes = [
    {
        path: 'blog/grid-2',
        component: BlogGrid2Component,
        data: { title: "Blog 2 Columnas" }
    },
    /*
    {
        path: 'blog/grid-3',
        component: BlogGrid3Component,
        data: { title: "Blog 3 Columnas" }
    },
    {
        path: 'blog-sidebar/left',
        component: BlogLeftComponent,
        data: { title: "Blog Sidebar Izquierda" }
    },
    {
        path: 'blog-sidebar/right',
        component: BlogRightComponent,
        data: { title: "Blog Sidebar Derecha" }
    },
    {
        path: 'blog-details/left',
        component: BlogDetailLeftComponent,
        data: { title: "Detalles del Blog Izquierda" }
    },
    {
        path: 'blog-details/right',
        component: BlogDetailRightComponent,
        data: { title: "Detalles del Blog Derecha" }
    },
    */
    {
        path: 'blog-details',
        component: BlogDetailsComponent,
        data: { title: "Detalles del Blog" }
    },
];
