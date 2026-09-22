import { Component, OnInit, inject, signal, input, output, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductApiService } from './../../../products/services/product-api-service';

interface Anime {
  id: number;
  title: string;
  image: string;
}

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-card.html',
  styleUrl: './mini-card.scss',
})
export class MiniCard implements OnInit{
  private productService = inject(ProductApiService);
    products = signal<any[]>([]);
    anime = signal<any | null>(null);
    animeIdInput = input.required<number>();

  ngOnInit(): void {
    this.productService.getAnimeDetailById(this.animeIdInput()).subscribe(response => this.anime.set(response));
  }
}
