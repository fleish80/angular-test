import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'joke',
    pathMatch: 'full',
  },
  {
    path: 'joke',
    loadComponent: () => import('./components/joke/joke.component'),
  },
];
