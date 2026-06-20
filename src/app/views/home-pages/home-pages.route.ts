import { Routes } from '@angular/router';
import { Home2Component } from './multi/home-2/home-2.component';
import { Home3Component } from './multi/home-3/home-3.component';
import { Home4Component } from './multi/home-4/home-4.component';
import { Home5Component } from './multi/home-5/home-5.component';
import { Home1Component } from './multi/home-1/home-1.component';
import { SingleHome1Component } from './single/single-home-1/single-home-1.component';
import { SingleHome2Component } from './single/single-home-2/single-home-2.component';
import { SingleHome3Component } from './single/single-home-3/single-home-3.component';
import { SingleHome4Component } from './single/single-home-4/single-home-4.component';
import { SingleHome5Component } from './single/single-home-5/single-home-5.component';

export const HOME_PAGES_ROUTES: Routes = [
    {
        path: 'home-1',
        component: Home1Component,
        data: { title: "Home-1" }
    },
    /*
    {
        path: 'home-2',
        component: Home2Component,
        data: { title: "Home-2" }
    },
    {
        path: 'home-3',
        component: Home3Component,
        data: { title: "Home-3" }

    },
    {
        path: 'home-4',
        component: Home4Component,
        data: { title: "Home-4" }
    },
    {
        path: 'home-5',
        component: Home5Component,
        data: { title: "Home-5" }
    },
    {
        path: 'single-home-1',
        component: SingleHome1Component,
        data: { title: "Single Home 1" }
    },
    {
        path: 'single-home-2',
        component: SingleHome2Component,
        data: { title: "Single Home 2" }
    },
    {
        path: 'single-home-3',
        component: SingleHome3Component,
        data: { title: "Single Home 3" }
    },
    {
        path: 'single-home-4',
        component: SingleHome4Component,
        data: { title: "Single Home 4" }
    },
    {
        path: 'single-home-5',
        component: SingleHome5Component,
        data: { title: "Single Home 5"}
    },
    */
];



