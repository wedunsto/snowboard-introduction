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
  },
  {
    path: 'standing-up',
    loadComponent: () => import('./beginner-lessons/standing-up/standing-up.page').then( m => m.StandingUpPage)
  },
  {
    path: 'test-toe-edge',
    loadComponent: () => import('./beginner-lessons/test-toe-edge/test-toe-edge.page').then( m => m.TestToeEdgePage)
  },
  {
    path: 'skating',
    loadComponent: () => import('./beginner-lessons/skating/skating.page').then( m => m.SkatingPage)
  },
  {
    path: 'turn-skating',
    loadComponent: () => import('./beginner-lessons/turn-skating/turn-skating.page').then( m => m.TurnSkatingPage)
  },
  {
    path: 'climbing-up-hill',
    loadComponent: () => import('./beginner-lessons/climbing-up-hill/climbing-up-hill.page').then( m => m.ClimbingUpHillPage)
  },
  {
    path: 'riding-down-hill',
    loadComponent: () => import('./beginner-lessons/riding-down-hill/riding-down-hill.page').then( m => m.RidingDownHillPage)
  },
  {
    path: 'heel-stop',
    loadComponent: () => import('./beginner-lessons/heel-stop/heel-stop.page').then( m => m.HeelStopPage)
  },
  {
    path: 'toe-stop',
    loadComponent: () => import('./beginner-lessons/toe-stop/toe-stop.page').then( m => m.ToeStopPage)
  },
  {
    path: 'standing-with-bindings',
    loadComponent: () => import('./beginner-lessons/standing-with-bindings/standing-with-bindings.page').then( m => m.StandingWithBindingsPage)
  },
  {
    path: 'managing-speed',
    loadComponent: () => import('./beginner-lessons/managing-speed/managing-speed.page').then( m => m.ManagingSpeedPage)
  },
  {
    path: 'falling-leaf',
    loadComponent: () => import('./beginner-lessons/falling-leaf/falling-leaf.page').then( m => m.FallingLeafPage)
  },
  {
    path: 'approach-fall-line',
    loadComponent: () => import('./beginner-lessons/approach-fall-line/approach-fall-line.page').then( m => m.ApproachFallLinePage)
  },
  {
    path: 'knee-steering',
    loadComponent: () => import('./beginner-lessons/knee-steering/knee-steering.page').then( m => m.KneeSteeringPage)
  },
  {
    path: 'linking-turns',
    loadComponent: () => import('./beginner-lessons/linking-turns/linking-turns.page').then( m => m.LinkingTurnsPage)
  },
  {
    path: 'chair-lift',
    loadComponent: () => import('./beginner-lessons/chair-lift/chair-lift.page').then( m => m.ChairLiftPage)
  },
  {
    path: 's-turn',
    loadComponent: () => import('./beginner-lessons/s-turn/s-turn.page').then( m => m.STurnPage)
  },
  {
    path: 'practice-skating',
    loadComponent: () => import('./beginner-drills/practice-skating/practice-skating.page').then( m => m.PracticeSkatingPage)
  },

];
