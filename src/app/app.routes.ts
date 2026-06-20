import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home-1',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () => import('./views/views.route').then((mod) => mod.VIEWS_ROUTES)
    },
    {
        path: '**',
        redirectTo: 'home-1'
    }
];
