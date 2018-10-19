export class Event {
  eventDate: Date;
  constructor(public eventDateStr: string,
    public address: string,
    public openHour: number,
    public closeHour: number,
    public latitude: number,
    public longitude: number,
  )   {
    this.eventDate =new Date(eventDateStr);
  }
}
