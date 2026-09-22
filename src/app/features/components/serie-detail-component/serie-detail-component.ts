import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductApiService } from './../../products/services/product-api-service';

@Component({
  selector: 'app-serie-detail-component',
  imports: [CommonModule],
  templateUrl: './serie-detail-component.html',
  styleUrl: './serie-detail-component.scss',
})
export class SerieDetailComponent  implements OnInit{
  constructor(private route: ActivatedRoute) {}

  season = signal(3) // a changer
  private productService = inject(ProductApiService);
    products = signal<any[]>([]);
    anime = signal<any | null>(null);

ngOnInit(): void {
  const animeId = this.route.snapshot.paramMap.get('id');
  if (animeId) {
    this.productService.getAnimeDetailById(animeId).subscribe(response => {
      this.anime.set(response);
    });
  } else {
    console.error("Aucun identifiant d'anime trouvé dans l'URL");
  }
}
}
