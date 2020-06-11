export class Action {
  id: Number;
  name: String;
  short_description: String;
  description: String;
  type: Number;
  dateStartTotal: Date; // date + time
  dateEndTotal: Date;   // date + time
  dayStart: String;     // without time
  dayEnd: String;       // without time
  timeStart: String;    // only time
  timeEnd: String;      // only time
  route: String;

  speedRange: String; // 5:30 - 6:00 hv/km OR 20-25 km/hour
  hard: Number; // 1-5 - no any need, it can be automatic later
  routeLength: String; // 10 km OR 50 - 55 km

  ownerUserId: String;
  ownerClubId: String;
}