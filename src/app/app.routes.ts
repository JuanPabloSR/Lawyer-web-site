import { Routes } from '@angular/router';
import { LayoutComponent } from '@layouts/layout.component';
import { Error404Component } from './views/pages/error-404/error-404.component';

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
        // URL que no existe: página 404 con encabezado y pie (antes redirigía al inicio sin avisar).
        path: '**',
        component: LayoutComponent,
        children: [
            { path: '', component: Error404Component, data: { title: 'Página no encontrada' } }
        ]
    }
];
