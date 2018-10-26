export class Event {
  constructor(
    public day: number,
    public month: number,
    public year: number,
    public address: string,
    public openHour: number,
    public closeHour: number,
    public latitude: number,
    public longitude: number
  ) { }
}
