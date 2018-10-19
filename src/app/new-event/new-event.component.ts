import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model'

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {
  @Output() sendEvent = new EventEmitter();

  submitNewEvent(
  day: number,
  month: number,
  year: number,
  address: string,
  openHour: number,
  closeHour: number,
  latitude: number,
  longitude: number,) {
    let newEvent: Event = new Event(day,month,year,address,openHour,closeHour,latitude,longitude);
    this.sendEvent.emit(newEvent);
  }
}
