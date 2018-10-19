import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model'

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {
  @Output() sendEvent = new EventEmitter();



}


// @Output() sendKeg = new EventEmitter();
//
//   submitForm(name: string, type: string, price: number, abv: number) {
//     let newKeg: Keg = new Keg(name, type, price, abv);
//     this.sendKeg.emit(newKeg);
//   }
