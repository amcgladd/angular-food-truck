import { Injectable } from '@angular/core';
import { Event } from './models/event.model';
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {

  constructor() { }

  getEvents() {
  return EVENTS;
}

getAlbumById(albumId: number){
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

}
