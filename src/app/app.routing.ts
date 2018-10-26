import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateringComponent } from './catering/catering.component';
import { EventDetailComponent }   from './event-detail/event-detail.component';



const appRoutes: Routes = [
  {
    path: '',
    component: CateringComponent
  },
  {
    path: 'events/:id',
    component: EventDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
