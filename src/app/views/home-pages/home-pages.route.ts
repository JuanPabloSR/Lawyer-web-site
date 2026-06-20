import { Routes } from '@angular/router';
import { Home1Component } from './multi/home-1/home-1.component';

export const HOME_PAGES_ROUTES: Routes = [
    {
        path: 'home-1',
        component: Home1Component,
        data: { title: "Home-1" }
    }
];



