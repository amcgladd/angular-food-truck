import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateringComponent } from './catering/catering.component';




const appRoutes: Routes = [
  {
    path: '',
    component: CateringComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
