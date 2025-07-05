import { Routes } from '@angular/router';

// You will generate these components in the next steps
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register').then((m) => m.Register),
  },
  {
    path: 'profile/:username',
    loadComponent: () =>
      import('./pages/profile/profile').then((m) => m.Profile),
  },
  {
    path: 'messages',
    loadComponent: () =>
      import('./pages/messages/messages').then((m) => m.Messages),
  },
  // Optional: Post details
  // { path: 'post/:id', loadComponent: () => import('./pages/post-detail/post-detail').then(m => m.PostDetail) },
  { path: '**', redirectTo: 'home' }, // Wildcard route
];
