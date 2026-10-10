import { Component, inject, type OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ScrollToTopComponent } from "./components/scroll-to-top/scroll-to-top.component";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { PreloaderComponent } from "./components/preloader/preloader.component";
import { SeoService } from './core/seo/seo.service';
import aos from 'aos';
import { filter } from 'rxjs';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ScrollToTopComponent, ThemeToggleComponent, PreloaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    private router = inject(Router)
    private seo = inject(SeoService)

    ngOnInit(): void {
        aos.init()
        this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(async (event) => {
            // Título, descripción, canonical, redes sociales y datos estructurados de la página actual.
            // Se carga aparte para no engordar el arranque de la web.
            const path = (event as NavigationEnd).urlAfterRedirects;
            const { seoForPath } = await import('./core/seo/seo-builders');
            this.seo.apply(seoForPath(path), path);
        });
    }
}
