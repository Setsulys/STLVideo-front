import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { MiniCard } from './../shared/mini-card/mini-card'
import { SerieDetailComponent } from './../serie-detail-component/serie-detail-component'

@Component({
  selector: 'app-home-component',
  imports: [SerieDetailComponent,MiniCard],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  animeIds = signal<number[]>([62164, 30831, 14813]);
  }
