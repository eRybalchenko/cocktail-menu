import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.page').then( m => m.MainPage)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./pages/details/details.page').then( m => m.DetailsPage)
  },
];
