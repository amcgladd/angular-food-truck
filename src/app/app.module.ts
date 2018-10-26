import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventMapComponent } from './event-map/event-map.component';
import { CateringComponent } from './catering/catering.component';
import { EventDetailComponent } from './event-detail/event-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NewEventComponent,
    EditEventComponent,
    EventMapComponent,
    CateringComponent,
    EventDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
