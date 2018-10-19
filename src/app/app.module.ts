import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NewEventComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
