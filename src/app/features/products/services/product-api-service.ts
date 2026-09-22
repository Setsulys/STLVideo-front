import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, map } from 'rxjs';
import { load } from 'js-yaml';

export interface MyAnimeListApiItem{
  url:String;
  clientId:String;
}

export interface AnimeDetails{
  id:number;
  title:string;
  alt_title:string[];
  picture:string;
  picture_small:string;
  synopsis:string;
  source:string;
  studios:string[];
  genres:string[];
  media_type:string;
  }

export interface AnimeInfo{
  id:number;
  title:string;
  alt_title:string[]
  picture_small:string;
  }


@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private http = inject(HttpClient);

  private loadConfig(): Observable<MyAnimeListApiItem>{
    return this.http.get('assets/data/myanimelistapi.yaml',{responseType:'text'}).pipe(map((rawText:string)=>load(rawText) as MyAnimeListApiItem)
    );
  }

   private fetchAnimeData(id: string | number): Observable<any> {
     return this.loadConfig().pipe(
       switchMap((config) => {
         const apiUrl = config.url || '/mal-api';
         const clientId = config.clientId.toString();
         const headers = new HttpHeaders({ 'X-MAL-CLIENT-ID': clientId });

         return this.http.get<any>(
           `${apiUrl}/anime/${id}?fields=synopsis,alternative_titles,source,genres,studios,media_type`,
           { headers }
         );
       })
     );
   }

  getAnimeById(id: string | number): Observable<AnimeInfo> {
    return this.fetchAnimeData(id).pipe(
      map((response) => ({
        id: response.id,
        title: response.title,
        alt_title: response.alternative_titles,
        picture_small: response.main_picture?.medium || '',
      }))
    );
  }

  getAnimeDetailById(id: string | number): Observable<AnimeDetails> {
    return this.fetchAnimeData(id).pipe(
      map((response) => ({
        id: response.id,
        title: response.title,
        alt_title: response.alternative_titles,
        picture: response.main_picture?.large || '',
        picture_small: response.main_picture?.medium || '',
        synopsis: response.synopsis || '',
        source: response.source || '',
        studios: response.studios ? response.studios.map((s: any) => s.name) : [],
        genres: response.genres ? response.genres.map((g: any) => g.name) : [],
        media_type: response.media_type || '',
      }))
    );
  }
}

