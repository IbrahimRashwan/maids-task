import { Routes } from '@angular/router';

export const userRoutes: Routes = [
  {
    path:'users', 
    children: [
      {
        path:'',
        loadComponent: () => import("./components/users/users.component")
      },
      {
        path:':id',
        loadComponent: () => import("./components/users/user-details/user-details.component")
      },
    ]
  }
];
