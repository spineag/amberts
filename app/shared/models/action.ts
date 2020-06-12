export class Action {
  id: number;
  name: string;
  short_description: string;
  description: string;
  type: number;
  dateStartTotal: Date; // date + time
  dateEndTotal: Date;   // date + time
  dayStart: string;     // without time
  dayEnd: string;       // without time
  timeStart: string;    // only time
  timeEnd: string;      // only time
  route: string;

  speedRange: string; // 5:30 - 6:00 hv/km OR 20-25 km/hour
  hard: number; // 1-5 - no any need, it can be automatic later
  routeLength: string; // 10 km OR 50 - 55 km

  ownerUserId: string;
  ownerClubId: string;

  fillDates():void{
    this.dayStart = ''+this.norm(this.dateStartTotal.getDate())+
                    '.'+this.norm(this.dateStartTotal.getMonth()+1)+
                    '.'+this.dateStartTotal.getFullYear();
    this.timeStart = ''+this.norm(this.dateStartTotal.getHours())+
                    ':'+this.dateStartTotal.getMinutes();
    this.dayEnd = ''+this.norm(this.dateEndTotal.getDate())+
                  '.'+this.norm(this.dateEndTotal.getMonth()+1)+
                  '.'+this.dateEndTotal.getFullYear();
    this.timeEnd = ''+this.norm(this.dateEndTotal.getHours())+
                  ':'+this.dateEndTotal.getMinutes()+'0';
  }

  private norm(st:string|number):string{
    st=''+st;
    if (st.length==1) return st;
    else return '0'+st;
  }
}