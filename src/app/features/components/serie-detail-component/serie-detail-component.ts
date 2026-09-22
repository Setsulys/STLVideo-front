import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductApiService } from './../../products/services/product-api-service';

@Component({
  selector: 'app-serie-detail-component',
  imports: [CommonModule],
  templateUrl: './serie-detail-component.html',
  styleUrl: './serie-detail-component.scss',
})
export class SerieDetailComponent  implements OnInit{
  private productService = inject(ProductApiService);
    products = signal<any[]>([]);
    isLoading = signal<boolean>(true);
    anime = signal<any | null>(null);

  ngOnInit(): void {
    const animeId = 14813;//62164 30831 14813
    this.productService.getAnimeDetailById(animeId).subscribe(response => this.anime.set(response));
  }
}
