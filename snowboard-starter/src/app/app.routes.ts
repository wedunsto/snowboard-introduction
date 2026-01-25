import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'standing-up',
    loadComponent: () => import('./beginner-lessons/standing-up/standing-up.page').then( m => m.StandingUpPage)
  },
  {
    path: 'test-toe-edge',
    loadComponent: () => import('./beginner-lessons/test-toe-edge/test-toe-edge.page').then( m => m.TestToeEdgePage)
  },

];
