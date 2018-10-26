import { Injectable } from '@angular/core';
import { Event } from './models/event.model';
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

  updateEvent(localUpdatedEvent){
    const eventEntryInFirebase = this.getEventById(localUpdatedEvent.$key);
    eventEntryInFirebase.update({day: localUpdatedEvent.day, month: localUpdatedEvent.month, year: localUpdatedEvent.year});
  }

  deleteEvent(localEventToDelete){
    var eventEntryInFirebase = this.getEventById(localEventToDelete.$key);
    eventEntryInFirebase.remove();
  }
}
