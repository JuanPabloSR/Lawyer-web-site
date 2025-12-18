import { Component, inject, type OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ScrollToTopComponent } from "./components/scroll-to-top/scroll-to-top.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { PreloaderComponent } from "./components/preloader/preloader.component";
import aos from 'aos';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ScrollToTopComponent, ThemeToggleComponent, PreloaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    private titleService = inject(Title)
    private router = inject(Router)
    private activatedRoute = inject(ActivatedRoute)
    ngOnInit(): void {
        aos.init()
        this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => {
                let route = this.activatedRoute;
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            mergeMap(route => route.data)
        )
        .subscribe(data => {
            if (data['title']) {
                this.titleService.setTitle(data['title'] +
                    ' | Vera Villamizar Abogados');
            }
        });
    }
}
