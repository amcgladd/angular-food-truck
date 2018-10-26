import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { EventService } from '../event.service';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [EventService]
})
export class EditEventComponent implements OnInit {
  @Input() selectedEvent;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  beginUpdatingEvent(eventToUpdate){
    this.eventService.updateEvent(eventToUpdate);
  }

  beginDeletingEvent(eventToDelete){
    if(confirm("Are you sure you want to delete this event from the inventory?")){
      this.eventService.deleteEvent(eventToDelete);
    }
  }
}
