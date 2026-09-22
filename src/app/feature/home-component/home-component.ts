import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MiniCard } from './../../shared/mini-card/mini-card'
@Component({
  selector: 'app-home-component',
  imports: [MiniCard],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {}
