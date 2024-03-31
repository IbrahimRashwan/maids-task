import { Routes } from '@angular/router';

export const errorRoutes: Routes = [
  {path:'**', loadComponent: () => import("./components/not-found/not-found.component")}
];
