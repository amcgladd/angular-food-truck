import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { CateringComponent } from './catering/catering.component';
import { EventDetailComponent }   from './event-detail/event-detail.component';
import { AdminComponent }   from './admin/admin.component';



const appRoutes: Routes = [
  {
    path: 'event-list',
    component: EventListComponent
  },
  {
    path: 'catering',
    component: CateringComponent
  },
  {
    path: 'events/:id',
    component: EventDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
