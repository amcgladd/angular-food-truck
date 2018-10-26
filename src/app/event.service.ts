import { Injectable } from '@angular/core';
import { Event } from './models/event.model';
import { EVENTS } from './mock-events';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EventService {

  constructor() { }

  getEvents() {
  return EVENTS;
}

getEventById(eventId: number){
    for (var i = 0; i <= EVENTS.length - 1; i++) {
      if (EVENTS[i].id === eventId) {
        return EVENTS[i];
      }
    }
  }

}
