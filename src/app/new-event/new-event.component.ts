import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  providers: [EventService]
})
export class NewEventComponent {
  @Output() sendEvent = new EventEmitter();

  constructor(private eventService: EventService) { }

  submitNewEvent(
  day: number,
  month: number,
  year: number,
  address: string,
  openHour: number,
  closeHour: number,
  latitude: number,
  longitude: number,
  id: number) {
    let newEvent: Event = new Event(day,month,year,address,openHour,closeHour,latitude,longitude);
    this.eventService.addEvent(newEvent);
    console.log(newEvent);
  }
}
