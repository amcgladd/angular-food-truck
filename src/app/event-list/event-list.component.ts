import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
@Input() childEventList: Event[];
@Output() clickEventToBeEdited = new EventEmitter();

editButtonClicked(eventToEdit: Event) {
  this.clickEventToBeEdited.emit(eventToEdit);
  }
}
