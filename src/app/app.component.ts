import { Component } from '@angular/core';
import { Event } from './models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterEventList: Event[] = [
    new Event(19, 11, 2018, "Pioneer Square 701 SW 6th Ave, Portland, OR 97205", 9, 5, 45.518997, -122.679262),
    new Event(20,11, 2018, "950 SW Washington St, Portland, OR 97204", 10, 6, 45.520846, -122.681493)
  ]
}
