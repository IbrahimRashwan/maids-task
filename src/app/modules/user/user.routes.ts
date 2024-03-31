import { Routes } from '@angular/router';
import { UserService } from './services/user.service';

export const userRoutes: Routes = [
  {
    path:'users',
    providers:[UserService],
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
