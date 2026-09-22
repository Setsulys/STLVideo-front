import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductApiService } from './../../../products/services/product-api-service';

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
    isLoading = signal<boolean>(true);
    anime = signal<any | null>(null);

  ngOnInit(): void {
    const animeId = 30831;
    this.productService.getAnimeDetailById(62164).subscribe(response => this.anime.set(response));
  }
}
