import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home-component/home-component'
import { SerieDetailComponent } from './features/components/serie-detail-component/serie-detail-component'

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'anime/:id',component: SerieDetailComponent}
  ];
