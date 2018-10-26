import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../event.service';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [EventService]
})
export class EditEventComponent implements OnInit {
  @Input() selectedEvent;
  @Output() clickDone = new EventEmitter();

  ngOnInit() {
  }

  editingDone() {
    this.clickDone.emit();
  }
}
