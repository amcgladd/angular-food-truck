import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  @Input() childEventList: Event[];
  @Output() clickEventToBeEdited = new EventEmitter();
  @Output() clickDeleteEvent = new EventEmitter();

  constructor(private router: Router){}

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
