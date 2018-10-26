import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../models/event.model'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  eventId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
        this.eventId = parseInt(urlParameters['id']);
      });
}
}
