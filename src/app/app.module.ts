import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventMapComponent } from './event-map/event-map.component';



@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NewEventComponent,
    EditEventComponent,
    EventMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
