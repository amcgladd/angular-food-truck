import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';
import { Router } from '@angular/router';
import { EventService } from '../event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventService]
})
export class EventListComponent implements OnInit {
  @Output() clickEventToBeEdited = new EventEmitter();
  @Output() clickDeleteEvent = new EventEmitter();

  events: Event[];
  selectedEvent = null;

  constructor(private router: Router, private eventService: EventService){}

  ngOnInit(){
      this.events = this.eventService.getEvents();
      console.log(this.childEventList);
    }

  editEvent(clickedEvent) {
    this.selectedEvent = clickedEvent
    console.log(this.selectedEvent);
  }

  editingDone() {
    this.selectedEvent = null;
  }

  addEvent(newEvent: Event) {
    this.childEventList.push(newEvent);
  }

  deleteEvent(deadEvent: Event) {
    const indexOfDeadEvent = this.childEventList.indexOf(deadEvent);
    this.childEventList.splice(indexOfDeadEvent, 1);
  }

  editButtonClicked(eventToEdit: Event) {
    this.clickEventToBeEdited.emit(eventToEdit);
  }

  deleteButtonClicked(eventToBeDeleted) {
    this.clickDeleteEvent.emit(eventToBeDeleted);
  }

  goToDetailPage(clickedEvent: Event) {
     this.router.navigate(['events', clickedEvent.id]);
   }
}
