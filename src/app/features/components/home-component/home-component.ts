import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { MiniCard } from './../shared/mini-card/mini-card'
import { SerieDetailComponent } from './../serie-detail-component/serie-detail-component'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-component',
  imports: [MiniCard],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
    animeIds = signal<number[]>([62164, 30831, 14813, 1473, 185, 1, 38472, 28851, 33926, 388, 16592, 14719, 59898, 52215]);
    constructor(private router: Router) {}
    goToAnime(id: string | number) {
      console.log('Le clic Angular fonctionne ! ID cliqué :', id);
      this.router.navigate(['/anime', id]);
    }
  }
