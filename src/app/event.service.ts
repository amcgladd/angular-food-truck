import { Injectable } from '@angular/core';
import { Event } from './models/event.model';
import { EVENTS } from './mock-events';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events = database.list('events');
  }

  getEvents() {
    return this.events;
  }

  addEvent(newEvent: Event) {
    this.events.push(newEvent);
  }

  getEventById(eventId: number){
    return this.database.object('events/' + eventId);
  }
}
