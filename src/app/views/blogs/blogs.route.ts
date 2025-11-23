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
        data: { title: "Blog Grid 2" }
    },
    {
        path: 'blog/grid-3',
        component: BlogGrid3Component,
        data: { title: "Blog Grid 3" }
    },
    {
        path: 'blog-sidebar/left',
        component: BlogLeftComponent,
        data: { title: "Blog Sidebar Left" }
    },
    {
        path: 'blog-sidebar/right',
        component: BlogRightComponent,
        data: { title: "Blog Sidebar Right" }
    },
    {
        path: 'blog-details/left',
        component: BlogDetailLeftComponent,
        data: { title: "Blog Details Left" }
    },
    {
        path: 'blog-details/right',
        component: BlogDetailRightComponent,
        data: { title: "Blog Details Right" }
    },
    {
        path: 'blog-details',
        component: BlogDetailsComponent,
        data: { title: "Blog Details" }
    },
];
