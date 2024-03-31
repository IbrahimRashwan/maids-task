import { Routes } from '@angular/router';
import { LayoutOutletComponent } from './components/layout-outlet/layout-outlet.component';
import { homeRoutes } from '../modules/home/home.routes';
import { userRoutes } from '../modules/user/user.routes';
import { errorRoutes } from '../modules/error/error.routes';

export const layoutRoutes: Routes = [
  {
    path:'', 
    component: LayoutOutletComponent, 
    children:[
      ...homeRoutes,
      ...userRoutes,
      ...errorRoutes,
    ]
  }
];
